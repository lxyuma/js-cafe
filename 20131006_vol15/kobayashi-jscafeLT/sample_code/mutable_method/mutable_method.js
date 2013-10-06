var MODE_LIST = {
  card_list: "card_list",
  card_sell: "card_sell",
  deck_list: "deck_list",
  deck_edit: "deck_edit",
  skill_set: "skill_set"
};

var viewSwitcher = {
  changeMode: function(mode){
    return this.changeViewDependingOnMode[mode]();
  },

  changeViewDependingOnMode: {
    card_list: function(){
      return 1;
    },

    card_sell: function(){
      return 2;
    },

    deck_list: function(){
      return 3;
    },

    deck_edit: function(){
      return 4;
    },

    skill_set: function(){
      return 5;
    }
  }
};

global.MODE_LIST = MODE_LIST;
global.viewSwitcher = viewSwitcher;