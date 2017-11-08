
    function Tab(ele) {
        this.ele = ele;
    }

    Tab.prototype.show = function() {
        var eles = this.ele.childNodes;
        var divs = [];
        for (var i = 0; i < eles.length; i++) {
            if (eles[i].nodeType == 1) {
                divs.push(eles[i]);
            }
        }

        var cntdiv = divs[1];
        var cntdivs = cntdiv.getElementsByTagName("div");

        for (var i = 1; i < cntdivs.length; i++) {
            cntdivs[i].style.display = "none";
        }

        var headdiv = divs[0];
        var spans = headdiv.getElementsByTagName("span");

        for (var i = 0; i < spans.length; i++) {
            spans[i].index = i;
            spans[i].onmouseover = function() {
                for (var j = 0; j < cntdivs.length; j++) {
                    cntdivs[j].style.display = "none";
                }
                cntdivs[this.index].style.display = "block";
            };
        }
    };

    var tabs = document.getElementsByClassName("tab");

    for (var i = 0; i < tabs.length; i++) {

        var t = new Tab(tabs[i]);
        t.show();
    }
