/*var values = [250, 50, 25, 9, 6, 4, 3, 2, 1,0];
 var betLevels = 5;

 var basicPaytable = {
 ROYAL_FLUSH: [],
 STRAIGHT_FLUSH: [],
 FOUR_OF_A_KIND: [],
 FULL_HOUSE: [],
 FLUSH: [],
 STRAIGHT: [],
 THREE_OF_A_KIND: [],
 TWO_PAIR: [],
 JACKS_OR_BETTER: []
 }
 var valIdx=0;
 for(var winType in basicPaytable){
 for(var idx=1; idx <= betLevels; idx++){
 basicPaytable[winType].push(values[valIdx]*idx);
 }
 valIdx++;
 }
 */
var paytable = {
  basic: {
    SYM0: {
      3: {number: 3, multiplier: 0, freespins: 10, type: "scatter"},
      4: {number: 4, multiplier: 0, freespins: 15, type: "scatter"},
      5: {number: 5, multiplier: 0, freespins: 20, type: "scatter"},
    },
    SYM1: {
      3: {number: 3, multiplier: 15, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 25, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 250, freespins: 0, type: "betline"},
    },
    SYM3: {
      3: {number: 3, multiplier: 15, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 25, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 250, freespins: 0, type: "betline"},
    },
    SYM4: {
      3: {number: 3, multiplier: 10, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 20, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 100, freespins: 0, type: "betline"},
    },
    SYM5: {
      3: {number: 3, multiplier: 8, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 20, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 60, freespins: 0, type: "betline"},
    },
    SYM6: {
      3: {number: 3, multiplier: 8, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 15, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 40, freespins: 0, type: "betline"},
    },
    SYM7: {
      3: {number: 3, multiplier: 5, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 10, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 30, freespins: 0, type: "betline"},
    },
    SYM8: {
      3: {number: 3, multiplier: 5, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 10, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 30, freespins: 0, type: "betline"},
    },
    SYM9: {
      3: {number: 3, multiplier: 4, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 8, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 20, freespins: 0, type: "betline"},
    },
    SYM10: {
      3: {number: 3, multiplier: 4, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 8, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 20, freespins: 0, type: "betline"},
    },
    SYM11: {
      3: {number: 3, multiplier: 4, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 8, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 20, freespins: 0, type: "betline"},
    },
    SYM12: {
      3: {number: 3, multiplier: 4, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 8, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 20, freespins: 0, type: "betline"},
    }
  }
  freespin: {
    SYM0: {
      3: {number: 3, multiplier: 0, freespins: 10, type: "scatter"},
      4: {number: 4, multiplier: 0, freespins: 15, type: "scatter"},
      5: {number: 5, multiplier: 0, freespins: 20, type: "scatter"},
    },
    SYM1: {
      3: {number: 3, multiplier: 15, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 25, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 250, freespins: 0, type: "betline"},
    },
    SYM3: {
      3: {number: 3, multiplier: 15, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 25, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 250, freespins: 0, type: "betline"},
    },
    SYM4: {
      3: {number: 3, multiplier: 10, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 20, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 100, freespins: 0, type: "betline"},
    },
    SYM5: {
      3: {number: 3, multiplier: 8, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 20, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 60, freespins: 0, type: "betline"},
    },
    SYM6: {
      3: {number: 3, multiplier: 8, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 15, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 40, freespins: 0, type: "betline"},
    },
    SYM7: {
      3: {number: 3, multiplier: 5, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 10, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 30, freespins: 0, type: "betline"},
    },
    SYM8: {
      3: {number: 3, multiplier: 5, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 10, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 30, freespins: 0, type: "betline"},
    },
    SYM9: {
      3: {number: 3, multiplier: 4, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 8, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 20, freespins: 0, type: "betline"},
    },
    SYM10: {
      3: {number: 3, multiplier: 4, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 8, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 20, freespins: 0, type: "betline"},
    },
    SYM11: {
      3: {number: 3, multiplier: 4, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 8, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 20, freespins: 0, type: "betline"},
    },
    SYM12: {
      3: {number: 3, multiplier: 4, freespins: 0, type: "betline"},
      4: {number: 4, multiplier: 8, freespins: 0, type: "betline"},
      5: {number: 5, multiplier: 20, freespins: 0, type: "betline"},
    }
  }
}

module.exports = paytable;
