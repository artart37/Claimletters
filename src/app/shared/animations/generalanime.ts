import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const smoothappearance = trigger("smoothappearance",[
    transition(":enter",[
        style({opacity:0}),
        animate("0.2s")
    ]),
])

export const rightleft = trigger("rightleft",[
    transition("none => inview", [
        group([
            query(".leftbox",style({opacity:0, transform:"translateX(-45%)"}),{optional:true}),
            query(".rightbox",style({opacity:0, transform:"translateX(45%)"}), {optional:true})
        ]),
        group([
            query(".leftbox",animate("1s ease",style({transform:"none", opacity:1, offset:1})
           ), {optional:true}),
            query(".rightbox",animate("1s 0.3s ease", style({transform:"none", opacity:1, offset:1})
            ), {optional:true})
        ])
    ])
])