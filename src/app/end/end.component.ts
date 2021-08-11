import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  lives: number;
  private sub:any;

  constructor(private route: ActivatedRoute, private modal: NgbModal) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.lives = params['lives']
    })
    this.setElements(this.lives)
  }

  setElements(lives){
    const textElement = document.getElementById('final-text')
    const imgElement = document.getElementById('final-img') as HTMLImageElement
    switch (lives.toString()) {
      case "0":
        textElement.innerText = "Game Over"
        imgElement.src = "assets/icons8-disappointed-100.png"       
        break;

      case "1":
        textElement.innerText = "Good effort!"
        imgElement.src = "assets/icons8-happy-200.png"       
        break;
    
      case "2":
        textElement.innerText = "Nice try!"
        imgElement.src = "assets/icons8-happy-200.png"      
        break;
    
      case "3":
        textElement.innerText = "Congratulations!"
        imgElement.src = "assets/icons8-happy-200.png"              
        break;

      default:
        alert(typeof lives + typeof 0)
    }
  }
}
