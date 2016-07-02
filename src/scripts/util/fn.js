var Util = {
  setFocus: function (e) {
    $(e).addClass('active').siblings().removeClass('active');
  }
};

module.exports = Util;