// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "messageHandlers": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Brightness Test",
      "content": [
        {
          "type": "lab.flow.Loop",
          "files": {},
          "parameters": {},
          "templateParameters": [
            {
              "": ""
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "10"
          },
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Loop",
          "skip": "${ this.state.numCorrect \u003E 8 }",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "parameters": {},
            "responses": {
              "": ""
            },
            "messageHandlers": {
              "run": function anonymous() {
this.state.numCorrect = 0;
}
            },
            "title": "Block 100%",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "files": {},
                "parameters": {},
                "messageHandlers": {},
                "viewport": [
                  800,
                  600
                ],
                "title": "Directions 100%",
                "responses": {
                  "keypress(Space)": "continue"
                },
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 225,
                    "angle": 0,
                    "width": 351.6,
                    "height": 28.25,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Press the space bar to continue",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "25",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -200,
                    "angle": 0,
                    "width": 593.69,
                    "height": 45.2,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Please set your brightness to 100%",
                    "fontStyle": "normal",
                    "fontWeight": "bold",
                    "fontSize": "40",
                    "fontFamily": "serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -75,
                    "angle": 0,
                    "width": 705.97,
                    "height": 140.21,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "The following images will show you a shape embedded in a \ndark green square. The shape is only slightly brighter than the \ncolor around it, so make sure your device brightness is at 100%. \nYou will be asked to determine which shape is being shown.\nYour screen should look like this (with either a circle, square, or triangle):",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "22",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 100,
                    "angle": 0,
                    "width": 314.58,
                    "height": 188.48,
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "fill": "#38571a"
                  },
                  {
                    "type": "circle",
                    "left": 0,
                    "top": 100,
                    "angle": 0,
                    "width": 72.43,
                    "height": 72.43,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "#3f6322"
                  }
                ]
              },
              {
                "type": "lab.flow.Loop",
                "files": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "Trial",
                "templateParameters": [
                  {
                    "stim": "Square.png",
                    "r": "s"
                  },
                  {
                    "stim": "Circle.png",
                    "r": "c"
                  },
                  {
                    "stim": "Triangle.png",
                    "r": "t"
                  }
                ],
                "responses": {},
                "sample": {
                  "mode": "draw-replace",
                  "n": "10"
                },
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "": ""
                  },
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "parameters": {},
                      "messageHandlers": {
                        "after:end": function anonymous() {
this.state.numCorrect += this.state.correct ? 1 : 0;

}
                      },
                      "viewport": [
                        800,
                        600
                      ],
                      "title": "Stim",
                      "files": {
                        "Square.png": "embedded\u002F74e1c53e34a77c132cdbcce3dd0d15d7562f94dcb11df2af8d92f46dbe2a3d29.png",
                        "Triangle.png": "embedded\u002F2175a748b69f67d1d02065c847110834e3036e299471eac33a55d41826761cf0.png",
                        "Circle.png": "embedded\u002F401eaa24a0e933f3edc3793fb742f944c4a99a607702c4d9ecff5ab24b0c838f.png"
                      },
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": -250,
                          "angle": 0,
                          "width": 633.25,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "What shape is within the dark green square?",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": 15,
                          "top": -200,
                          "angle": 0,
                          "width": 534.36,
                          "height": 28.25,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "Press 's' for square, 't' for triangle, or 'c' for circle",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "25",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "image",
                          "left": 0,
                          "top": 75,
                          "angle": 0,
                          "width": 803.0400000000001,
                          "height": 452.48,
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[this.parameters.stim] }",
                          "autoScale": "height"
                        }
                      ],
                      "correctResponse": "${parameters.r}",
                      "responses": {
                        "keypress(s)": "s",
                        "keypress(t)": "t",
                        "keypress(c)": "c"
                      }
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [],
                      "files": {},
                      "parameters": {},
                      "responses": {
                        "": ""
                      },
                      "messageHandlers": {},
                      "viewport": [
                        800,
                        600
                      ],
                      "title": "Inter-stim",
                      "timeout": "200"
                    }
                  ]
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 500.64,
                    "height": 308.81,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Let's try again. \n\nPlease make sure your screen\n brightness is set to 100%.\n\nPress space to continue.\n",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "files": {},
                "parameters": {},
                "responses": {
                  "keypress(Space)": "continue"
                },
                "messageHandlers": {
                  "run": function anonymous() {
if (this.state.numCorrect >= 8) {
  this.parent.parent.end();
}
}
                },
                "viewport": [
                  800,
                  600
                ],
                "title": "Screen",
                "skip": "${ this.state.numCorrect \u003E 1 }"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 465.83,
          "height": 162,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Thank you for your participation!\n\nPress any key to finish the task \nand return to the survey.",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontSize": 32,
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {},
      "parameters": {},
      "responses": {
        "keypress": "continue"
      },
      "messageHandlers": {},
      "viewport": [
        800,
        600
      ],
      "title": "Screen"
    }
  ]
})

// Let's go!
study.run()