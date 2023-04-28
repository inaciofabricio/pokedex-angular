import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};

import { AppService } from 'src/app/app.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.sass']
})
export class DetalhesComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  pokemon!: Pokemon;
  status!: boolean;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.appService.buscar(id)
      .subscribe(
        res => {
          this.pokemon = new Pokemon(res);

          const categories = this.pokemon?.status?.map(i => { return i.name });
          const values = this.pokemon?.status?.map(i => { return i.value });

          this.chartOptions = {
            series: [
              {
                name: "Status Base",
                data: values
              }
            ],
            chart: {
              height: 250,
              type: "radar"
            },
            title: {
              text: ""
            },
            xaxis: {
              categories: categories
            }
          };

          let menu: any = this.getClass("apexcharts-toolbar");

          setInterval(() => {
            if(menu[0]){
              menu[0].style.display = "none";
            } else {
              menu = this.getClass("apexcharts-toolbar");
            }
          },300);

        },
        error => {
          const item = {
            id: id
          }
          this.pokemon = new Pokemon(item);
        }
      )


  }

  abrirCollapse(id: string) {
    let e: HTMLElement | null = window.document.getElementById(id)
    if(e){
      e.style.display == "none" ? e.style.display = "block" : e.style.display = "none";
    }
  }

  getClass(c: string) {
    return document.getElementsByClassName(c);
  }

}
