var yandex={
	"v1":47344155,
    "t2pr":46986978,
    "v2":47344197,
    "v3":47344230,
    "v4":47344113,
    "v5":47391076,
	"v5-mob":47391202,
    "v6":47391220,
    "v7":47391358,
    "v8":47246112,
    "v9":45663114,
    "v10":45663576,
    "v11":46081356,
    "v12":46253475,
    "v13":46253769,
    "v14":47246142,
	"v6v":46590681
};
var mailru={
	"v1":2954275,
    "v2":2954277,
    "v3":2954278,
    "v4":2954279,
    "v5":2955038,
	"v5-mob":2955040,
    "v6":2955044,
    "v7":2955046,
    "v8":2952397,
    "v9":2922992,
    "v10":2922993,
    "v11":2930901,
    "v12":2934141,
    "v13":2934145,
    "v14":2952398,
	"v6v":2940507
};
var google={
	"v1":"UA-112274813-9",
    "v2":"UA-112274813-10",
    "v3":"UA-112274813-11",
    "v4":"UA-112274813-12",
    "v5":"UA-90744790-13",
	"v5-mob":"UA-90744790-14",
    "v6":"UA-90744790-15",
    "v7":"UA-90744790-16",
    "v8":"UA-97020294-46",
    "v9":"UA-97020294-30",
    "v10":"UA-97020294-31",
    "v11":"UA-97020294-32",
    "v12":"UA-97020294-34",
    "v13":"UA-97020294-35",
    "v14":"UA-97020294-47",
	"v6v":"UA-97020294-42"
};


var site=document.location.pathname
.replace(/\/+/g,'')
.replace('149','')
.replace('index.html','')
.replace('index2.html','')
.replace('confirm.html','') || $.url().param('version');

mailruId=mailru[site];
yandexId=yandex[site];
googleId=google[site];

(function(d, id){
    var _tmr = window._tmr || (window._tmr = []);
    _tmr.push({id: id, type: "pageView", start: (new Date()).getTime()});
    (function (d, w, id) {
        if (d.getElementById(id)) return;
        var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
        ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
        var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
        if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
    })(document, window, "topmailru-code");
    var r = d.createElement('img'), v = d.createElement('div'), n = d.createElement('noscript'); r.src = '//top-fwz1.mail.ru/counter?id='+id+';js=na';
    r.style = 'border:0;';r.height = 1;r.width = 1;v.style = 'position:absolute;left:-10000px;';v.appendChild(r);n.appendChild(v);d.body.appendChild(n);
})(document, mailruId);

(function (d, w, c, id) {
        (w[c] = w[c] || []).push(function() {
            try {
                var n='yaCounter'+id;
                w.n = new Ya.Metrika({
                    id:id,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks",yandexId);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','http://analytics.ksn.pw/analytics.js','ga');

  ga('create', googleId, 'auto');
  ga('send', 'pageview');
