window.rennes = window.rennes || {};

window.rennes.PostSidebar = function () {
  this.sidebar = document.querySelector('.post-sidebar');
  this.summary = document.querySelector('.block-summary');
  
  if (!this.sidebar || !this.summary || window.innerWidth <= 768) {
    return;
  }
  
  this.getSummaryHeight();
};

window.rennes.PostSidebar.prototype = {
  getSummaryHeight: function () {
    var summaryHeight = this.summary.offsetHeight;
    this.sidebar.style.top = `${summaryHeight}px`;
    this.sidebar.style.opacity = 1;
  }
};

document.addEventListener('DOMContentLoaded', function () {
  if (document.body.classList.contains('posts__page')) {
    new window.rennes.PostSidebar();
  }
});