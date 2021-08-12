import { textNode } from './textNode';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

var state = {lives:3}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  name: string;
  private sub:any;
  
  

  constructor(private modalService: NgbModal, private router: Router, private route: ActivatedRoute) {
  }
  
  textNodes = [
    {
      id: 1,
      text: "You are a secondary school student in your final year. As your national exams draw closer, your teachers begin to give out practice paper after practice paper. Some have scheduled mock exams in the hope of encouraging students to study at home. Over the past couple of weeks, you have become increasingly apprehensive about the exams. You tried coming up with study plans, but you could not follow them consistently. \n\nToday, your Chemistry teacher reminded your class about the test conducted at the end of the week.",
      img_m:"m01-full-smile",
      options: [
        {
          text: "Spend some time every day to revise and ensure you get at least 8 hours of sleep each night. (Not getting enough sleep impairs academic performance and makes it harder to get through the day.)",
          nextText: 3,
        },
        {
          text: "Pull an all-nighter to cram every single tested topic the night before the test.",
          nextText: 2,
        },
      ],
    },
  
    {
      id: 2,
      text: "It’s finally the day of the test. You get seated in the classroom and the papers are being given out. Your teacher asks you to check that all the pages are printed properly before the test begins. No problems so far.\n\nHowever, during the test, your heart starts to beat fast, and you can’t concentrate on answering the next question. What do you do?",
      img_m:"m01-full-sad",
      options: [
        {
          text: "Take a deep breath and keep a positive mindset to calm yourself down and resume the test. (Relaxation techniques to calm down can reduce symptoms of anxiety)",
          nextText: 4
        },
        {
          text: "Get angry and force yourself to focus on the question",
          nextText: 5
        }
      ]
    },
  
    {
      id: 3,
      text: "A few days before the test, you still feel a little uneasy and unprepared. What do you do?",
      img_m:"m01-full-sad",
      options: [
        {
          text: "Start exercising to release some tension. (Exercise can release tension, and the less tension you feel as you go into the test, the better off you might be.) ",
          nextText: 5
        },
        {
          text: "Ignore the problem and continue with your day.",
          nextText: 6
        }
      ]
    },
  
    {
      id: 4,
      text: "A couple of weeks later, you receive your marked test papers. You got the marks you wanted! \nJane: 'Hey, {{name}}. How well did you do on the test?' \n{{name}}: 'I did great! Getting enough, quality sleep and staying positive has really been helpful.'",
      img_m:"m01-full-smile",
      img_f:"fm02-full-smile",
      options: [
        {
          text: "Next",
          nextText: 7
        }
      ]
    },
  
    {
      id:5,
      text: "A couple of weeks later, you receive your marked test papers. Your score was a little lower than what you aimed for. \nJane: 'Hey, {{name}}. How well did you do on the test?' \n{{name}}: 'Not as good as I expected. But...'",
      img_m:"m01-full-sad",
      img_f:"fm02-full-nervous",
      options: [
        {
          text:"Think positively. Take this test as a learning point and aim to do better on the next one. (Research has shown that positive thinking may improve physical well-being, produce lower feelings of depression and produce lower levels of distress.)",
          nextText:8
        },
        {
          text:"Blame other people for your low score",
          nextText:9
        }
      ]
    },
  
    {
      id:6,
      text: "A couple of weeks later, you receive your marked test papers. Your score was much lower than what you aimed for. \nJane: 'Hey, {{name}}. How well did you do on the test?' \n{{name}}: 'Not as good as I expected. But...'",
      img_m:"m01-full-sad",
      img_f:"fm02-full-nervous",
      options: [
        {
          text:"Try your best to stay positive and take this test as a learning point. (Research has shown that positive thinking may improve physical well-being, produce lower feelings of depression and produce lower levels of distress.)",
          nextText:9
        },
        {
          text:"Blame other people for your low score",
          nextText:-1,
          setState: {lives: 0}
        }
      ]
    },
  
    {
      id:7,
      text: "You spend some more time to catch up on assignments. Surprisingly, it didn’t take as long as you thought it would. It seems like you have some more free time for the coming weeks. How do you choose to spend it?",
      img_m:"m01-full-smile",
      options: [
        {
          text:"Take up a new hobby, go out with friends or participate in sports in addition to your normal study routine.  (Having a stress “outlet” can help you cope with and manage your stress.)",
          nextText:-1,
          setState: {lives: 3}
        },
        {
          text:"Stay isolated in your room and sleep all day.",
          nextText:-1,
          setState: {lives: 2}
        }
      ]
    },
  
    {
      id:8,
      text: "Your assignments start to pile up again and you start to feel overwhelmed by the number of things to do.\n\n{{name}}: I’m so tired of this routine, there’s so much to do and I can never finish my assignments. If only there was something I could do about this…",
      img_m:"m01-full-sad",
      options: [
        {
          text:"Talk to someone about your situation and how you feel. (Talking about your situation to others can drastically reduce stress.)",
          nextText:-1,
          setState: {lives: 2}
        },
        {
          text:"Keep your feelings to yourself.",
          nextText:-1,
          setState: {lives: 1}
        }
      ]
    },
  
    {
      id:9,
      text: "Over time, you start to realise that you have difficulty carrying out daily routines and maintaining your relationships. You can’t seem enjoy things you used to enjoy. Your thoughts also start to interfere with school much more and you can’t seem to focus as well as you used to. What do you do?",
      img_m:"m01-full-sad",
      options: [
        {
          text:"Seek help from a professional. (Some stress and anxiety is normal but it is good to reach out when these feelings negatively impact your everyday life)",
          nextText:-1,
          setState: {lives: 1}
        },
        {
          text:"Continue to rant about your problems to your friends.",
          nextText:-1,
          setState: {lives: 0}
        }
      ]
    },
  
  
  ];

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
    this.name = params['name']
  })
    this.startGame()
  }

  startGame() {
    state = { lives: 3 }
    this.showTextNode(1);    
  }

  //Function to open modal
  open(content) {
    this.modalService.open(content)
  }

  showTextNode(textNodeIndex) {
    const textElement = document.getElementById('text')
    const optionButtonsElement = document.getElementById('option-buttons')
    const imgMElement = document.getElementById('img-m') as HTMLImageElement
    const imgFElement = document.getElementById('img-f') as HTMLImageElement
    const textNode = this.textNodes.find((textNode) => textNode.id === textNodeIndex)
    
    if(textNode.text.includes("{{name}}")){
      textNode.text = textNode.text.replace(/{{name}}/g, this.name)
    }

    textElement.innerText = textNode.text;
    imgMElement.src = "assets/"+ textNode.img_m +".png";
    imgFElement.src = "assets/"+ textNode.img_f +".png";
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
      if (this.showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add("btn")
        button.style.backgroundColor = "#9a513f"
        button.style.color ="#d8bdac"
        button.addEventListener('click', () => this.selectOption(option))
        optionButtonsElement.appendChild(button)
      }
      if(option == textNode.options[0]){
        const or = document.createElement('h6')
        or.innerText = "or would you rather..." 
        optionButtonsElement.appendChild(or)
      }
    })
  }

  showOption(option) {
    return true
  }

  selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    
    if (nextTextNodeId <= 0) {
      this.router.navigateByUrl('/end/'+ state.lives.toString())
    }
    this.showTextNode(nextTextNodeId)
  }



}
