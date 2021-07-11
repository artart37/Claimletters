import { animate, group, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations"
//For Magic Chips
export const selecteditemanime = trigger("selectanime",[
state("notadded", style("*")),
state("added", style("*")),
transition("notadded => added", [
        query(".simpletext", animate('0.1s linear', style({opacity: 0})), { optional: true }),
        query(".checkmark", animate("0.4s ease-out", keyframes([
                style({visibility: "visible", transform: "scale(0)", offset:0}),
                style({transform: "scale(1.2)",offset:0.95}),
                style({visibility: "hidden",offset:1}),
          ])
        ), { optional: true }),
        query(".simpletext", animate('0.3s 0.2s ease-in', style({opacity: 1})), { optional: true }),
    ],
  ),
]);

//For How it Works
export const howitworks = trigger("howitworksanime",[
  state("none",style("*")),
  state("start",
    style({flexWrap:"wrap"}),
  ),
  state("final",
  style({flexWrap:"wrap"}),
),
 
  transition("none => start", [
 //Animating the first two items seperately one after another - leaving
    query(".howitworkssection:nth-of-type(1)",
      animate("0.3s 2s ease-out", style({
      right:"50%",
      visibility:"hidden",
      })), {optional:true}),
    query(".howitworkssection:nth-of-type(2)",
      animate("0.3s 0.3s ease-out", style({
      right:"100%",
      visibility:"hidden",
      })), {optional:true}),
//Animating the odd (numbers) and even (text) items simultanesouly, but with two animation steps (for enetring and leaving through positioning)
//Stagger adds a delay for each iteration and we also have delays within animate to make it smoother and texts appearing and leaving with a slight delay
    group([
      query(".howitworkssection:nth-of-type(n+2):nth-of-type(odd)", stagger("3.2s", [
      animate("0.3s 0.3s ease-out", style({
      right:"50%",
      left:"auto",
      visibility:"visible",
      })),
      animate("0.3s 2s ease-out", style({
        right:"100%",
        left:"auto",
        visibility:"hidden",
      })),
    ]), {optional:true}),
      query(".howitworkssection:nth-of-type(n+4):nth-of-type(even)", stagger("3.2s", [
      animate("0.3s 0.6s ease-out", style({
      right:0,
      left:"auto",
      visibility:"visible",
      })),
      animate("0.3s 2s ease-out", style({
        right:"100%",
        left:"auto",
        visibility:"visible",
      })),
    ]), {optional:true}),
   ]),
  ]), 
  transition("start => final",[
    group([
      query(":self",[
        style({opacity:0}),
        animate("0.3s ease-in",keyframes([
          style({flexWrap:"wrap", opacity:0.5, offset:0.5}),
          style({opacity:1, offset:1})
        ]))
      ], {optional:true}),
      query(".howitworkssection:nth-of-type(even)", style({transform:"translateY(-25%)", opacity:0}), {optional:true}),
    ]),
    query(".howitworkssection:nth-of-type(even)",stagger("0.3s",[
      animate("0.3s 0.3s ease-in", keyframes([
        style({transform:"translateY(-20%)", opacity:0.3, offset:0}),
        style({transform:"translateY(-10%)", opacity:0.75, offset:0.5}),
        style({transform:"none", opacity:1, offset:1})
      ]))
      ]),{optional:true}),
   ])
])