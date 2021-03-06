(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // .svelte-kit/cloudflare-workers/node_modules/mime/Mime.js
  var require_Mime = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/Mime.js"(exports, module) {
      "use strict";
      function Mime() {
        this._types = Object.create(null);
        this._extensions = Object.create(null);
        for (let i = 0; i < arguments.length; i++) {
          this.define(arguments[i]);
        }
        this.define = this.define.bind(this);
        this.getType = this.getType.bind(this);
        this.getExtension = this.getExtension.bind(this);
      }
      Mime.prototype.define = function(typeMap, force) {
        for (let type in typeMap) {
          let extensions = typeMap[type].map(function(t) {
            return t.toLowerCase();
          });
          type = type.toLowerCase();
          for (let i = 0; i < extensions.length; i++) {
            const ext = extensions[i];
            if (ext[0] === "*") {
              continue;
            }
            if (!force && ext in this._types) {
              throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
            }
            this._types[ext] = type;
          }
          if (force || !this._extensions[type]) {
            const ext = extensions[0];
            this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
          }
        }
      };
      Mime.prototype.getType = function(path) {
        path = String(path);
        let last = path.replace(/^.*[/\\]/, "").toLowerCase();
        let ext = last.replace(/^.*\./, "").toLowerCase();
        let hasPath = last.length < path.length;
        let hasDot = ext.length < last.length - 1;
        return (hasDot || !hasPath) && this._types[ext] || null;
      };
      Mime.prototype.getExtension = function(type) {
        type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
        return type && this._extensions[type.toLowerCase()] || null;
      };
      module.exports = Mime;
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/types/standard.js
  var require_standard = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/types/standard.js"(exports, module) {
      module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["ecma", "es"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/mrb-consumer+xml": ["*xdf"], "application/mrb-publish+xml": ["*xdf"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["*xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-error+xml": ["xer"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/types/other.js
  var require_other = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/types/other.js"(exports, module) {
      module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/index.js
  var require_mime = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/index.js"(exports, module) {
      "use strict";
      var Mime = require_Mime();
      module.exports = new Mime(require_standard(), require_other());
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/types.js
  var require_types = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p in b2)
              if (b2.hasOwnProperty(p))
                d3[p] = b2[p];
          };
          return extendStatics(d2, b);
        };
        return function(d2, b) {
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
      var KVError = function(_super) {
        __extends(KVError2, _super);
        function KVError2(message, status) {
          var _newTarget = this.constructor;
          if (status === void 0) {
            status = 500;
          }
          var _this = _super.call(this, message) || this;
          Object.setPrototypeOf(_this, _newTarget.prototype);
          _this.name = KVError2.name;
          _this.status = status;
          return _this;
        }
        return KVError2;
      }(Error);
      exports.KVError = KVError;
      var MethodNotAllowedError = function(_super) {
        __extends(MethodNotAllowedError2, _super);
        function MethodNotAllowedError2(message, status) {
          if (message === void 0) {
            message = "Not a valid request method";
          }
          if (status === void 0) {
            status = 405;
          }
          return _super.call(this, message, status) || this;
        }
        return MethodNotAllowedError2;
      }(KVError);
      exports.MethodNotAllowedError = MethodNotAllowedError;
      var NotFoundError2 = function(_super) {
        __extends(NotFoundError3, _super);
        function NotFoundError3(message, status) {
          if (message === void 0) {
            message = "Not Found";
          }
          if (status === void 0) {
            status = 404;
          }
          return _super.call(this, message, status) || this;
        }
        return NotFoundError3;
      }(KVError);
      exports.NotFoundError = NotFoundError2;
      var InternalError = function(_super) {
        __extends(InternalError2, _super);
        function InternalError2(message, status) {
          if (message === void 0) {
            message = "Internal Error in KV Asset Handler";
          }
          if (status === void 0) {
            status = 500;
          }
          return _super.call(this, message, status) || this;
        }
        return InternalError2;
      }(KVError);
      exports.InternalError = InternalError;
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/index.js
  var require_dist = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
      var mime = require_mime();
      var types_1 = require_types();
      Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
        return types_1.MethodNotAllowedError;
      } });
      Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
        return types_1.NotFoundError;
      } });
      Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
        return types_1.InternalError;
      } });
      var mapRequestToAsset = function(request) {
        var parsedUrl = new URL(request.url);
        var pathname = parsedUrl.pathname;
        if (pathname.endsWith("/")) {
          pathname = pathname.concat("index.html");
        } else if (!mime.getType(pathname)) {
          pathname = pathname.concat("/index.html");
        }
        parsedUrl.pathname = pathname;
        return new Request(parsedUrl.toString(), request);
      };
      exports.mapRequestToAsset = mapRequestToAsset;
      function serveSinglePageApp(request) {
        request = mapRequestToAsset(request);
        var parsedUrl = new URL(request.url);
        if (parsedUrl.pathname.endsWith(".html")) {
          return new Request(parsedUrl.origin + "/index.html", request);
        } else {
          return request;
        }
      }
      exports.serveSinglePageApp = serveSinglePageApp;
      var defaultCacheControl = {
        browserTTL: null,
        edgeTTL: 2 * 60 * 60 * 24,
        bypassCache: false
      };
      var getAssetFromKV2 = function(event, options2) {
        return __awaiter(void 0, void 0, void 0, function() {
          var request, ASSET_NAMESPACE, ASSET_MANIFEST, SUPPORTED_METHODS, rawPathKey, pathIsEncoded, requestKey, parsedUrl, pathname, pathKey, cache, mimeType, shouldEdgeCache, cacheKey, evalCacheOpts, shouldSetBrowserCache, response, headers, shouldRevalidate, body;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                options2 = Object.assign({
                  ASSET_NAMESPACE: __STATIC_CONTENT,
                  ASSET_MANIFEST: __STATIC_CONTENT_MANIFEST,
                  mapRequestToAsset,
                  cacheControl: defaultCacheControl,
                  defaultMimeType: "text/plain"
                }, options2);
                request = event.request;
                ASSET_NAMESPACE = options2.ASSET_NAMESPACE;
                ASSET_MANIFEST = typeof options2.ASSET_MANIFEST === "string" ? JSON.parse(options2.ASSET_MANIFEST) : options2.ASSET_MANIFEST;
                if (typeof ASSET_NAMESPACE === "undefined") {
                  throw new types_1.InternalError("there is no KV namespace bound to the script");
                }
                SUPPORTED_METHODS = ["GET", "HEAD"];
                if (!SUPPORTED_METHODS.includes(request.method)) {
                  throw new types_1.MethodNotAllowedError(request.method + " is not a valid request method");
                }
                rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
                pathIsEncoded = false;
                if (ASSET_MANIFEST[rawPathKey]) {
                  requestKey = request;
                } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
                  pathIsEncoded = true;
                  requestKey = request;
                } else {
                  requestKey = options2.mapRequestToAsset(request);
                }
                parsedUrl = new URL(requestKey.url);
                pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
                pathKey = pathname.replace(/^\/+/, "");
                cache = caches.default;
                mimeType = mime.getType(pathKey) || options2.defaultMimeType;
                if (mimeType.startsWith("text")) {
                  mimeType += "; charset=utf-8";
                }
                shouldEdgeCache = false;
                if (typeof ASSET_MANIFEST !== "undefined") {
                  if (ASSET_MANIFEST[pathKey]) {
                    pathKey = ASSET_MANIFEST[pathKey];
                    shouldEdgeCache = true;
                  }
                }
                cacheKey = new Request(parsedUrl.origin + "/" + pathKey, request);
                evalCacheOpts = function() {
                  switch (typeof options2.cacheControl) {
                    case "function":
                      return options2.cacheControl(request);
                    case "object":
                      return options2.cacheControl;
                    default:
                      return defaultCacheControl;
                  }
                }();
                options2.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
                if (options2.cacheControl.bypassCache || options2.cacheControl.edgeTTL === null || request.method == "HEAD") {
                  shouldEdgeCache = false;
                }
                shouldSetBrowserCache = typeof options2.cacheControl.browserTTL === "number";
                response = null;
                if (!shouldEdgeCache)
                  return [3, 2];
                return [4, cache.match(cacheKey)];
              case 1:
                response = _a.sent();
                _a.label = 2;
              case 2:
                if (!response)
                  return [3, 3];
                headers = new Headers(response.headers);
                shouldRevalidate = false;
                shouldRevalidate = [
                  request.headers.has("range") !== true,
                  request.headers.has("if-none-match"),
                  response.headers.has("etag"),
                  request.headers.get("if-none-match") === "" + pathKey
                ].every(Boolean);
                if (shouldRevalidate) {
                  if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
                    response.body.cancel();
                    console.log("Body exists and environment supports readable streams. Body cancelled");
                  } else {
                    console.log("Environment doesnt support readable streams");
                  }
                  headers.set("cf-cache-status", "REVALIDATED");
                  response = new Response(null, {
                    status: 304,
                    headers,
                    statusText: "Not Modified"
                  });
                } else {
                  headers.set("CF-Cache-Status", "HIT");
                  response = new Response(response.body, { headers });
                }
                return [3, 5];
              case 3:
                return [4, ASSET_NAMESPACE.get(pathKey, "arrayBuffer")];
              case 4:
                body = _a.sent();
                if (body === null) {
                  throw new types_1.NotFoundError("could not find " + pathKey + " in your content namespace");
                }
                response = new Response(body);
                if (shouldEdgeCache) {
                  response.headers.set("Accept-Ranges", "bytes");
                  response.headers.set("Content-Length", body.length);
                  if (!response.headers.has("etag")) {
                    response.headers.set("etag", "" + pathKey);
                  }
                  response.headers.set("Cache-Control", "max-age=" + options2.cacheControl.edgeTTL);
                  event.waitUntil(cache.put(cacheKey, response.clone()));
                  response.headers.set("CF-Cache-Status", "MISS");
                }
                _a.label = 5;
              case 5:
                response.headers.set("Content-Type", mimeType);
                if (shouldSetBrowserCache) {
                  response.headers.set("Cache-Control", "max-age=" + options2.cacheControl.browserTTL);
                } else {
                  response.headers.delete("Cache-Control");
                }
                return [2, response];
            }
          });
        });
      };
      exports.getAssetFromKV = getAssetFromKV2;
    }
  });

  // .svelte-kit/output/server/app.js
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var _map;
  function get_single_valued_header(headers, key) {
    const value = headers[key];
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return void 0;
      }
      if (value.length > 1) {
        throw new Error(`Multiple headers provided for ${key}. Multiple may be provided only for set-cookie`);
      }
      return value[0];
    }
    return value;
  }
  function coalesce_to_error(err) {
    return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
  }
  function lowercase_keys(obj) {
    const clone = {};
    for (const key in obj) {
      clone[key.toLowerCase()] = obj[key];
    }
    return clone;
  }
  function error(body) {
    return {
      status: 500,
      body,
      headers: {}
    };
  }
  function is_string(s2) {
    return typeof s2 === "string" || s2 instanceof String;
  }
  function is_content_type_textual(content_type) {
    if (!content_type)
      return true;
    const [type] = content_type.split(";");
    return type === "text/plain" || type === "application/json" || type === "application/x-www-form-urlencoded" || type === "multipart/form-data";
  }
  async function render_endpoint(request, route, match) {
    const mod = await route.load();
    const handler = mod[request.method.toLowerCase().replace("delete", "del")];
    if (!handler) {
      return;
    }
    const params = route.params(match);
    const response = await handler({ ...request, params });
    const preface = `Invalid response from route ${request.path}`;
    if (!response) {
      return;
    }
    if (typeof response !== "object") {
      return error(`${preface}: expected an object, got ${typeof response}`);
    }
    let { status = 200, body, headers = {} } = response;
    headers = lowercase_keys(headers);
    const type = get_single_valued_header(headers, "content-type");
    const is_type_textual = is_content_type_textual(type);
    if (!is_type_textual && !(body instanceof Uint8Array || is_string(body))) {
      return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
    }
    let normalized_body;
    if ((typeof body === "object" || typeof body === "undefined") && !(body instanceof Uint8Array) && (!type || type.startsWith("application/json"))) {
      headers = { ...headers, "content-type": "application/json; charset=utf-8" };
      normalized_body = JSON.stringify(typeof body === "undefined" ? {} : body);
    } else {
      normalized_body = body;
    }
    return { status, body: normalized_body, headers };
  }
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
  var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
  var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
  var escaped$1 = {
    "<": "\\u003C",
    ">": "\\u003E",
    "/": "\\u002F",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function devalue(value) {
    var counts = new Map();
    function walk(thing) {
      if (typeof thing === "function") {
        throw new Error("Cannot stringify a function");
      }
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (!isPrimitive(thing)) {
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
          case "Date":
          case "RegExp":
            return;
          case "Array":
            thing.forEach(walk);
            break;
          case "Set":
          case "Map":
            Array.from(thing).forEach(walk);
            break;
          default:
            var proto = Object.getPrototypeOf(thing);
            if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
              throw new Error("Cannot stringify arbitrary non-POJOs");
            }
            if (Object.getOwnPropertySymbols(thing).length > 0) {
              throw new Error("Cannot stringify POJOs with symbolic keys");
            }
            Object.keys(thing).forEach(function(key) {
              return walk(thing[key]);
            });
        }
      }
    }
    walk(value);
    var names = new Map();
    Array.from(counts).filter(function(entry) {
      return entry[1] > 1;
    }).sort(function(a, b) {
      return b[1] - a[1];
    }).forEach(function(entry, i) {
      names.set(entry[0], getName(i));
    });
    function stringify(thing) {
      if (names.has(thing)) {
        return names.get(thing);
      }
      if (isPrimitive(thing)) {
        return stringifyPrimitive(thing);
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          return "Object(" + stringify(thing.valueOf()) + ")";
        case "RegExp":
          return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
        case "Date":
          return "new Date(" + thing.getTime() + ")";
        case "Array":
          var members = thing.map(function(v, i) {
            return i in thing ? stringify(v) : "";
          });
          var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
          return "[" + members.join(",") + tail + "]";
        case "Set":
        case "Map":
          return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
        default:
          var obj = "{" + Object.keys(thing).map(function(key) {
            return safeKey(key) + ":" + stringify(thing[key]);
          }).join(",") + "}";
          var proto = Object.getPrototypeOf(thing);
          if (proto === null) {
            return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
          }
          return obj;
      }
    }
    var str = stringify(value);
    if (names.size) {
      var params_1 = [];
      var statements_1 = [];
      var values_1 = [];
      names.forEach(function(name, thing) {
        params_1.push(name);
        if (isPrimitive(thing)) {
          values_1.push(stringifyPrimitive(thing));
          return;
        }
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
            values_1.push("Object(" + stringify(thing.valueOf()) + ")");
            break;
          case "RegExp":
            values_1.push(thing.toString());
            break;
          case "Date":
            values_1.push("new Date(" + thing.getTime() + ")");
            break;
          case "Array":
            values_1.push("Array(" + thing.length + ")");
            thing.forEach(function(v, i) {
              statements_1.push(name + "[" + i + "]=" + stringify(v));
            });
            break;
          case "Set":
            values_1.push("new Set");
            statements_1.push(name + "." + Array.from(thing).map(function(v) {
              return "add(" + stringify(v) + ")";
            }).join("."));
            break;
          case "Map":
            values_1.push("new Map");
            statements_1.push(name + "." + Array.from(thing).map(function(_a) {
              var k = _a[0], v = _a[1];
              return "set(" + stringify(k) + ", " + stringify(v) + ")";
            }).join("."));
            break;
          default:
            values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
            Object.keys(thing).forEach(function(key) {
              statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
            });
        }
      });
      statements_1.push("return " + str);
      return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
    } else {
      return str;
    }
  }
  function getName(num) {
    var name = "";
    do {
      name = chars[num % chars.length] + name;
      num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
  }
  function isPrimitive(thing) {
    return Object(thing) !== thing;
  }
  function stringifyPrimitive(thing) {
    if (typeof thing === "string")
      return stringifyString(thing);
    if (thing === void 0)
      return "void 0";
    if (thing === 0 && 1 / thing < 0)
      return "-0";
    var str = String(thing);
    if (typeof thing === "number")
      return str.replace(/^(-)?0\./, "$1.");
    return str;
  }
  function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
  }
  function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
  }
  function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
  }
  function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
  }
  function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
  }
  function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
      var char = str.charAt(i);
      var code = char.charCodeAt(0);
      if (char === '"') {
        result += '\\"';
      } else if (char in escaped$1) {
        result += escaped$1[char];
      } else if (code >= 55296 && code <= 57343) {
        var next = str.charCodeAt(i + 1);
        if (code <= 56319 && (next >= 56320 && next <= 57343)) {
          result += char + str[++i];
        } else {
          result += "\\u" + code.toString(16).toUpperCase();
        }
      } else {
        result += char;
      }
    }
    result += '"';
    return result;
  }
  function noop() {
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  Promise.resolve();
  var subscriber_queue = [];
  function writable(value, start = noop) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update(fn) {
      set(fn(value));
    }
    function subscribe(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update, subscribe };
  }
  function hash(value) {
    let hash2 = 5381;
    let i = value.length;
    if (typeof value === "string") {
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else {
      while (i)
        hash2 = hash2 * 33 ^ value[--i];
    }
    return (hash2 >>> 0).toString(36);
  }
  var s$1 = JSON.stringify;
  async function render_response({
    branch,
    options: options2,
    $session,
    page_config,
    status,
    error: error2,
    page
  }) {
    const css2 = new Set(options2.entry.css);
    const js = new Set(options2.entry.js);
    const styles = new Set();
    const serialized_data = [];
    let rendered;
    let is_private = false;
    let maxage;
    if (error2) {
      error2.stack = options2.get_stack(error2);
    }
    if (page_config.ssr) {
      branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
        if (node.css)
          node.css.forEach((url) => css2.add(url));
        if (node.js)
          node.js.forEach((url) => js.add(url));
        if (node.styles)
          node.styles.forEach((content) => styles.add(content));
        if (fetched && page_config.hydrate)
          serialized_data.push(...fetched);
        if (uses_credentials)
          is_private = true;
        maxage = loaded.maxage;
      });
      const session = writable($session);
      const props = {
        stores: {
          page: writable(null),
          navigating: writable(null),
          session
        },
        page,
        components: branch.map(({ node }) => node.module.default)
      };
      for (let i = 0; i < branch.length; i += 1) {
        props[`props_${i}`] = await branch[i].loaded.props;
      }
      let session_tracking_active = false;
      const unsubscribe = session.subscribe(() => {
        if (session_tracking_active)
          is_private = true;
      });
      session_tracking_active = true;
      try {
        rendered = options2.root.render(props);
      } finally {
        unsubscribe();
      }
    } else {
      rendered = { head: "", html: "", css: { code: "", map: null } };
    }
    const include_js = page_config.router || page_config.hydrate;
    if (!include_js)
      js.clear();
    const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
      ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
      ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
    ].join("\n		");
    let init2 = "";
    if (options2.amp) {
      init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
    } else if (include_js) {
      init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
        throw new Error(`Failed to serialize session data: ${error3.message}`);
      })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${(branch || []).map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page && page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page && page.path)},
						query: new URLSearchParams(${page ? s$1(page.query.toString()) : ""}),
						params: ${page && s$1(page.params)}
					}
				}` : "null"}
			});
		<\/script>`;
    }
    if (options2.service_worker) {
      init2 += `<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('${options2.service_worker}');
			}
		<\/script>`;
    }
    const head = [
      rendered.head,
      styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
      links,
      init2
    ].join("\n\n		");
    const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
      let attributes = `type="application/json" data-type="svelte-data" data-url="${url}"`;
      if (body2)
        attributes += ` data-body="${hash(body2)}"`;
      return `<script ${attributes}>${json}<\/script>`;
    }).join("\n\n	")}
		`;
    const headers = {
      "content-type": "text/html"
    };
    if (maxage) {
      headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
    }
    if (!options2.floc) {
      headers["permissions-policy"] = "interest-cohort=()";
    }
    return {
      status,
      headers,
      body: options2.template({ head, body })
    };
  }
  function try_serialize(data, fail) {
    try {
      return devalue(data);
    } catch (err) {
      if (fail)
        fail(coalesce_to_error(err));
      return null;
    }
  }
  function serialize_error(error2) {
    if (!error2)
      return null;
    let serialized = try_serialize(error2);
    if (!serialized) {
      const { name, message, stack } = error2;
      serialized = try_serialize({ ...error2, name, message, stack });
    }
    if (!serialized) {
      serialized = "{}";
    }
    return serialized;
  }
  function normalize(loaded) {
    const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
    if (loaded.error || has_error_status) {
      const status = loaded.status;
      if (!loaded.error && has_error_status) {
        return {
          status: status || 500,
          error: new Error()
        };
      }
      const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
      if (!(error2 instanceof Error)) {
        return {
          status: 500,
          error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
        };
      }
      if (!status || status < 400 || status > 599) {
        console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
        return { status: 500, error: error2 };
      }
      return { status, error: error2 };
    }
    if (loaded.redirect) {
      if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
        };
      }
      if (typeof loaded.redirect !== "string") {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be a string')
        };
      }
    }
    if (loaded.context) {
      throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
    }
    return loaded;
  }
  var s = JSON.stringify;
  async function load_node({
    request,
    options: options2,
    state,
    route,
    page,
    node,
    $session,
    stuff,
    prerender_enabled,
    is_leaf,
    is_error,
    status,
    error: error2
  }) {
    const { module } = node;
    let uses_credentials = false;
    const fetched = [];
    let set_cookie_headers = [];
    let loaded;
    const page_proxy = new Proxy(page, {
      get: (target, prop, receiver) => {
        if (prop === "query" && prerender_enabled) {
          throw new Error("Cannot access query on a page with prerendering enabled");
        }
        return Reflect.get(target, prop, receiver);
      }
    });
    if (module.load) {
      const load_input = {
        page: page_proxy,
        get session() {
          uses_credentials = true;
          return $session;
        },
        fetch: async (resource, opts = {}) => {
          let url;
          if (typeof resource === "string") {
            url = resource;
          } else {
            url = resource.url;
            opts = {
              method: resource.method,
              headers: resource.headers,
              body: resource.body,
              mode: resource.mode,
              credentials: resource.credentials,
              cache: resource.cache,
              redirect: resource.redirect,
              referrer: resource.referrer,
              integrity: resource.integrity,
              ...opts
            };
          }
          const resolved = resolve(request.path, url.split("?")[0]);
          let response;
          const filename = resolved.replace(options2.paths.assets, "").slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
          if (asset) {
            response = options2.read ? new Response(options2.read(asset.file), {
              headers: asset.type ? { "content-type": asset.type } : {}
            }) : await fetch(`http://${page.host}/${asset.file}`, opts);
          } else if (resolved.startsWith("/") && !resolved.startsWith("//")) {
            const relative = resolved;
            const headers = {
              ...opts.headers
            };
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: relative,
              rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body),
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(relative, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          } else {
            if (resolved.startsWith("//")) {
              throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
            }
            if (typeof request.host !== "undefined") {
              const { hostname: fetch_hostname } = new URL(url);
              const [server_hostname] = request.host.split(":");
              if (`.${fetch_hostname}`.endsWith(`.${server_hostname}`) && opts.credentials !== "omit") {
                uses_credentials = true;
                opts.headers = {
                  ...opts.headers,
                  cookie: request.headers.cookie
                };
              }
            }
            const external_request = new Request(url, opts);
            response = await options2.hooks.externalFetch.call(null, external_request);
          }
          if (response) {
            const proxy = new Proxy(response, {
              get(response2, key, receiver) {
                async function text() {
                  const body = await response2.text();
                  const headers = {};
                  for (const [key2, value] of response2.headers) {
                    if (key2 === "set-cookie") {
                      set_cookie_headers = set_cookie_headers.concat(value);
                    } else if (key2 !== "etag") {
                      headers[key2] = value;
                    }
                  }
                  if (!opts.body || typeof opts.body === "string") {
                    fetched.push({
                      url,
                      body: opts.body,
                      json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape$1(body)}}`
                    });
                  }
                  return body;
                }
                if (key === "text") {
                  return text;
                }
                if (key === "json") {
                  return async () => {
                    return JSON.parse(await text());
                  };
                }
                return Reflect.get(response2, key, response2);
              }
            });
            return proxy;
          }
          return response || new Response("Not found", {
            status: 404
          });
        },
        stuff: { ...stuff }
      };
      if (is_error) {
        load_input.status = status;
        load_input.error = error2;
      }
      loaded = await module.load.call(null, load_input);
    } else {
      loaded = {};
    }
    if (!loaded && is_leaf && !is_error)
      return;
    if (!loaded) {
      throw new Error(`${node.entry} - load must return a value except for page fall through`);
    }
    return {
      node,
      loaded: normalize(loaded),
      stuff: loaded.stuff || stuff,
      fetched,
      set_cookie_headers,
      uses_credentials
    };
  }
  var escaped$2 = {
    "<": "\\u003C",
    ">": "\\u003E",
    "/": "\\u002F",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  function escape$1(str) {
    let result = '"';
    for (let i = 0; i < str.length; i += 1) {
      const char = str.charAt(i);
      const code = char.charCodeAt(0);
      if (char === '"') {
        result += '\\"';
      } else if (char in escaped$2) {
        result += escaped$2[char];
      } else if (code >= 55296 && code <= 57343) {
        const next = str.charCodeAt(i + 1);
        if (code <= 56319 && next >= 56320 && next <= 57343) {
          result += char + str[++i];
        } else {
          result += `\\u${code.toString(16).toUpperCase()}`;
        }
      } else {
        result += char;
      }
    }
    result += '"';
    return result;
  }
  var absolute = /^([a-z]+:)?\/?\//;
  function resolve(base2, path) {
    const base_match = absolute.exec(base2);
    const path_match = absolute.exec(path);
    if (!base_match) {
      throw new Error(`bad base path: "${base2}"`);
    }
    const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
    const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
    baseparts.pop();
    for (let i = 0; i < pathparts.length; i += 1) {
      const part = pathparts[i];
      if (part === ".")
        continue;
      else if (part === "..")
        baseparts.pop();
      else
        baseparts.push(part);
    }
    const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
    return `${prefix}${baseparts.join("/")}`;
  }
  async function respond_with_error({ request, options: options2, state, $session, status, error: error2 }) {
    const default_layout = await options2.load_component(options2.manifest.layout);
    const default_error = await options2.load_component(options2.manifest.error);
    const page = {
      host: request.host,
      path: request.path,
      query: request.query,
      params: {}
    };
    const loaded = await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_layout,
      $session,
      stuff: {},
      prerender_enabled: is_prerender_enabled(options2, default_error, state),
      is_leaf: false,
      is_error: false
    });
    const branch = [
      loaded,
      await load_node({
        request,
        options: options2,
        state,
        route: null,
        page,
        node: default_error,
        $session,
        stuff: loaded ? loaded.stuff : {},
        prerender_enabled: is_prerender_enabled(options2, default_error, state),
        is_leaf: false,
        is_error: true,
        status,
        error: error2
      })
    ];
    try {
      return await render_response({
        options: options2,
        $session,
        page_config: {
          hydrate: options2.hydrate,
          router: options2.router,
          ssr: options2.ssr
        },
        status,
        error: error2,
        branch,
        page
      });
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options2.handle_error(error3, request);
      return {
        status: 500,
        headers: {},
        body: error3.stack
      };
    }
  }
  function is_prerender_enabled(options2, node, state) {
    return options2.prerender && (!!node.module.prerender || !!state.prerender && state.prerender.all);
  }
  async function respond$1(opts) {
    const { request, options: options2, state, $session, route } = opts;
    let nodes;
    try {
      nodes = await Promise.all(route.a.map((id) => id ? options2.load_component(id) : void 0));
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options2.handle_error(error3, request);
      return await respond_with_error({
        request,
        options: options2,
        state,
        $session,
        status: 500,
        error: error3
      });
    }
    const leaf = nodes[nodes.length - 1].module;
    let page_config = get_page_config(leaf, options2);
    if (!leaf.prerender && state.prerender && !state.prerender.all) {
      return {
        status: 204,
        headers: {},
        body: ""
      };
    }
    let branch = [];
    let status = 200;
    let error2;
    let set_cookie_headers = [];
    ssr:
      if (page_config.ssr) {
        let stuff = {};
        for (let i = 0; i < nodes.length; i += 1) {
          const node = nodes[i];
          let loaded;
          if (node) {
            try {
              loaded = await load_node({
                ...opts,
                node,
                stuff,
                prerender_enabled: is_prerender_enabled(options2, node, state),
                is_leaf: i === nodes.length - 1,
                is_error: false
              });
              if (!loaded)
                return;
              set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
              if (loaded.loaded.redirect) {
                return with_cookies({
                  status: loaded.loaded.status,
                  headers: {
                    location: encodeURI(loaded.loaded.redirect)
                  }
                }, set_cookie_headers);
              }
              if (loaded.loaded.error) {
                ({ status, error: error2 } = loaded.loaded);
              }
            } catch (err) {
              const e = coalesce_to_error(err);
              options2.handle_error(e, request);
              status = 500;
              error2 = e;
            }
            if (loaded && !error2) {
              branch.push(loaded);
            }
            if (error2) {
              while (i--) {
                if (route.b[i]) {
                  const error_node = await options2.load_component(route.b[i]);
                  let node_loaded;
                  let j = i;
                  while (!(node_loaded = branch[j])) {
                    j -= 1;
                  }
                  try {
                    const error_loaded = await load_node({
                      ...opts,
                      node: error_node,
                      stuff: node_loaded.stuff,
                      prerender_enabled: is_prerender_enabled(options2, error_node, state),
                      is_leaf: false,
                      is_error: true,
                      status,
                      error: error2
                    });
                    if (error_loaded.loaded.error) {
                      continue;
                    }
                    page_config = get_page_config(error_node.module, options2);
                    branch = branch.slice(0, j + 1).concat(error_loaded);
                    break ssr;
                  } catch (err) {
                    const e = coalesce_to_error(err);
                    options2.handle_error(e, request);
                    continue;
                  }
                }
              }
              return with_cookies(await respond_with_error({
                request,
                options: options2,
                state,
                $session,
                status,
                error: error2
              }), set_cookie_headers);
            }
          }
          if (loaded && loaded.loaded.stuff) {
            stuff = {
              ...stuff,
              ...loaded.loaded.stuff
            };
          }
        }
      }
    try {
      return with_cookies(await render_response({
        ...opts,
        page_config,
        status,
        error: error2,
        branch: branch.filter(Boolean)
      }), set_cookie_headers);
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options2.handle_error(error3, request);
      return with_cookies(await respond_with_error({
        ...opts,
        status: 500,
        error: error3
      }), set_cookie_headers);
    }
  }
  function get_page_config(leaf, options2) {
    return {
      ssr: "ssr" in leaf ? !!leaf.ssr : options2.ssr,
      router: "router" in leaf ? !!leaf.router : options2.router,
      hydrate: "hydrate" in leaf ? !!leaf.hydrate : options2.hydrate
    };
  }
  function with_cookies(response, set_cookie_headers) {
    if (set_cookie_headers.length) {
      response.headers["set-cookie"] = set_cookie_headers;
    }
    return response;
  }
  async function render_page(request, route, match, options2, state) {
    if (state.initiator === route) {
      return {
        status: 404,
        headers: {},
        body: `Not found: ${request.path}`
      };
    }
    const params = route.params(match);
    const page = {
      host: request.host,
      path: request.path,
      query: request.query,
      params
    };
    const $session = await options2.hooks.getSession(request);
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route,
      page
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  }
  function read_only_form_data() {
    const map = new Map();
    return {
      append(key, value) {
        if (map.has(key)) {
          (map.get(key) || []).push(value);
        } else {
          map.set(key, [value]);
        }
      },
      data: new ReadOnlyFormData(map)
    };
  }
  var ReadOnlyFormData = class {
    constructor(map) {
      __privateAdd(this, _map, void 0);
      __privateSet(this, _map, map);
    }
    get(key) {
      const value = __privateGet(this, _map).get(key);
      return value && value[0];
    }
    getAll(key) {
      return __privateGet(this, _map).get(key);
    }
    has(key) {
      return __privateGet(this, _map).has(key);
    }
    *[Symbol.iterator]() {
      for (const [key, value] of __privateGet(this, _map)) {
        for (let i = 0; i < value.length; i += 1) {
          yield [key, value[i]];
        }
      }
    }
    *entries() {
      for (const [key, value] of __privateGet(this, _map)) {
        for (let i = 0; i < value.length; i += 1) {
          yield [key, value[i]];
        }
      }
    }
    *keys() {
      for (const [key] of __privateGet(this, _map))
        yield key;
    }
    *values() {
      for (const [, value] of __privateGet(this, _map)) {
        for (let i = 0; i < value.length; i += 1) {
          yield value[i];
        }
      }
    }
  };
  _map = new WeakMap();
  function parse_body(raw, headers) {
    if (!raw)
      return raw;
    const content_type = headers["content-type"];
    const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
    const text = () => new TextDecoder(headers["content-encoding"] || "utf-8").decode(raw);
    switch (type) {
      case "text/plain":
        return text();
      case "application/json":
        return JSON.parse(text());
      case "application/x-www-form-urlencoded":
        return get_urlencoded(text());
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(text(), boundary.slice("boundary=".length));
      }
      default:
        return raw;
    }
  }
  function get_urlencoded(text) {
    const { data, append } = read_only_form_data();
    text.replace(/\+/g, " ").split("&").forEach((str) => {
      const [key, value] = str.split("=");
      append(decodeURIComponent(key), decodeURIComponent(value));
    });
    return data;
  }
  function get_multipart(text, boundary) {
    const parts = text.split(`--${boundary}`);
    if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
      throw new Error("Malformed form data");
    }
    const { data, append } = read_only_form_data();
    parts.slice(1, -1).forEach((part) => {
      const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
      if (!match) {
        throw new Error("Malformed form data");
      }
      const raw_headers = match[1];
      const body = match[2].trim();
      let key;
      const headers = {};
      raw_headers.split("\r\n").forEach((str) => {
        const [raw_header, ...raw_directives] = str.split("; ");
        let [name, value] = raw_header.split(": ");
        name = name.toLowerCase();
        headers[name] = value;
        const directives = {};
        raw_directives.forEach((raw_directive) => {
          const [name2, value2] = raw_directive.split("=");
          directives[name2] = JSON.parse(value2);
        });
        if (name === "content-disposition") {
          if (value !== "form-data")
            throw new Error("Malformed form data");
          if (directives.filename) {
            throw new Error("File upload is not yet implemented");
          }
          if (directives.name) {
            key = directives.name;
          }
        }
      });
      if (!key)
        throw new Error("Malformed form data");
      append(key, body);
    });
    return data;
  }
  async function respond(incoming, options2, state = {}) {
    if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
      const has_trailing_slash = incoming.path.endsWith("/");
      if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !(incoming.path.split("/").pop() || "").includes(".")) {
        const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
        const q = incoming.query.toString();
        return {
          status: 301,
          headers: {
            location: options2.paths.base + path + (q ? `?${q}` : "")
          }
        };
      }
    }
    const headers = lowercase_keys(incoming.headers);
    const request = {
      ...incoming,
      headers,
      body: parse_body(incoming.rawBody, headers),
      params: {},
      locals: {}
    };
    try {
      return await options2.hooks.handle({
        request,
        resolve: async (request2) => {
          if (state.prerender && state.prerender.fallback) {
            return await render_response({
              options: options2,
              $session: await options2.hooks.getSession(request2),
              page_config: { ssr: false, router: true, hydrate: true },
              status: 200,
              branch: []
            });
          }
          const decoded = decodeURI(request2.path);
          for (const route of options2.manifest.routes) {
            const match = route.pattern.exec(decoded);
            if (!match)
              continue;
            const response = route.type === "endpoint" ? await render_endpoint(request2, route, match) : await render_page(request2, route, match, options2, state);
            if (response) {
              if (response.status === 200) {
                const cache_control = get_single_valued_header(response.headers, "cache-control");
                if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
                  const etag = `"${hash(response.body || "")}"`;
                  if (request2.headers["if-none-match"] === etag) {
                    return {
                      status: 304,
                      headers: {},
                      body: ""
                    };
                  }
                  response.headers["etag"] = etag;
                }
              }
              return response;
            }
          }
          const $session = await options2.hooks.getSession(request2);
          return await respond_with_error({
            request: request2,
            options: options2,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${request2.path}`)
          });
        }
      });
    } catch (err) {
      const e = coalesce_to_error(err);
      options2.handle_error(e, request);
      return {
        status: 500,
        headers: {},
        body: options2.dev ? e.stack : e.message
      };
    }
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
  }
  function getContext(key) {
    return get_current_component().$$.context.get(key);
  }
  Promise.resolve();
  var escaped = {
    '"': "&quot;",
    "'": "&#39;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };
  function escape(html) {
    return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
  }
  var missing_component = {
    $$render: () => ""
  };
  function validate_component(component, name) {
    if (!component || !component.$$render) {
      if (name === "svelte:component")
        name += " this={...}";
      throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
  }
  var on_destroy;
  function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
      const parent_component = current_component;
      const $$ = {
        on_destroy,
        context: new Map(context || (parent_component ? parent_component.$$.context : [])),
        on_mount: [],
        before_update: [],
        after_update: [],
        callbacks: blank_object()
      };
      set_current_component({ $$ });
      const html = fn(result, props, bindings, slots);
      set_current_component(parent_component);
      return html;
    }
    return {
      render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
        on_destroy = [];
        const result = { title: "", head: "", css: new Set() };
        const html = $$render(result, props, {}, $$slots, context);
        run_all(on_destroy);
        return {
          html,
          css: {
            code: Array.from(result.css).map((css2) => css2.code).join("\n"),
            map: null
          },
          head: result.title + result.head
        };
      },
      $$render
    };
  }
  function add_attribute(name, value, boolean) {
    if (value == null || boolean && !value)
      return "";
    return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
  }
  function afterUpdate() {
  }
  var css$b = {
    code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
    map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
  };
  var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { stores } = $$props;
    let { page } = $$props;
    let { components } = $$props;
    let { props_0 = null } = $$props;
    let { props_1 = null } = $$props;
    let { props_2 = null } = $$props;
    setContext("__svelte__", stores);
    afterUpdate(stores.page.notify);
    if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
      $$bindings.stores(stores);
    if ($$props.page === void 0 && $$bindings.page && page !== void 0)
      $$bindings.page(page);
    if ($$props.components === void 0 && $$bindings.components && components !== void 0)
      $$bindings.components(components);
    if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
      $$bindings.props_0(props_0);
    if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
      $$bindings.props_1(props_1);
    if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
      $$bindings.props_2(props_2);
    $$result.css.add(css$b);
    {
      stores.page.set(page);
    }
    return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
      default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
      })}` : ``}`
    })}

${``}`;
  });
  var base = "";
  var assets = "";
  function set_paths(paths) {
    base = paths.base;
    assets = paths.assets || base;
  }
  function set_prerendering(value) {
  }
  var user_hooks = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module"
  });
  var template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en" \u26A1>\n<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n	' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
  var options = null;
  var default_settings = { paths: { "base": "", "assets": "" } };
  function init(settings = default_settings) {
    set_paths(settings.paths);
    set_prerendering(settings.prerendering || false);
    const hooks = get_hooks(user_hooks);
    options = {
      amp: true,
      dev: false,
      entry: {
        file: assets + "/_app/start-07ad6f75.js",
        css: [],
        js: [assets + "/_app/start-07ad6f75.js", assets + "/_app/chunks/vendor-f8a0085d.js"]
      },
      fetched: void 0,
      floc: false,
      get_component_path: (id) => assets + "/_app/" + entry_lookup[id],
      get_stack: (error2) => String(error2),
      handle_error: (error2, request) => {
        hooks.handleError({ error: error2, request });
        error2.stack = options.get_stack(error2);
      },
      hooks,
      hydrate: true,
      initiator: void 0,
      load_component,
      manifest,
      paths: settings.paths,
      prerender: true,
      read: settings.read,
      root: Root,
      service_worker: null,
      router: true,
      ssr: true,
      target: null,
      template,
      trailing_slash: "never"
    };
  }
  var d = (s2) => s2.replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  var empty = () => ({});
  var manifest = {
    assets: [{ "file": "black-square.jpg", "size": 23163, "type": "image/jpeg" }, { "file": "favicon.png", "size": 2270, "type": "image/png" }, { "file": "logo-192.png", "size": 3444, "type": "image/png" }, { "file": "logo-512.png", "size": 9998, "type": "image/png" }, { "file": "logo-contur.svg", "size": 1377, "type": "image/svg+xml" }, { "file": "logo.svg", "size": 1328, "type": "image/svg+xml" }, { "file": "logo1.svg", "size": 6386, "type": "image/svg+xml" }, { "file": "logo2.svg", "size": 5457, "type": "image/svg+xml" }, { "file": "logo3.svg", "size": 2467, "type": "image/svg+xml" }, { "file": "logo_circle_contur.svg", "size": 1374, "type": "image/svg+xml" }, { "file": "manifest.json", "size": 340, "type": "application/json" }, { "file": "screw.png", "size": 5602, "type": "image/png" }, { "file": "square.png", "size": 317, "type": "image/png" }],
    layout: "src/routes/__layout.svelte",
    error: "src/routes/__error.svelte",
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: empty,
        a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
        b: ["src/routes/__error.svelte"]
      },
      {
        type: "page",
        pattern: /^(?:\/(.*))?\/?$/,
        params: (m) => ({ parts: d(m[1] || "") }),
        a: ["src/routes/__layout.svelte", "src/routes/[...parts].svelte"],
        b: ["src/routes/__error.svelte"]
      }
    ]
  };
  var get_hooks = (hooks) => ({
    getSession: hooks.getSession || (() => ({})),
    handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
    handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
    externalFetch: hooks.externalFetch || fetch
  });
  var module_lookup = {
    "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
      return __layout;
    }),
    "src/routes/__error.svelte": () => Promise.resolve().then(function() {
      return __error;
    }),
    "src/routes/index.svelte": () => Promise.resolve().then(function() {
      return index;
    }),
    "src/routes/[...parts].svelte": () => Promise.resolve().then(function() {
      return ____parts_;
    })
  };
  var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-3554eb75.js", "css": ["assets/pages/__layout.svelte-309de487.css"], "js": ["pages/__layout.svelte-3554eb75.js", "chunks/vendor-f8a0085d.js", "chunks/Footer-d961b91b.js"], "styles": ['*,:before,:after{box-sizing:border-box}html{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9a9a9a}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9a9a9a}input::placeholder,textarea::placeholder{opacity:1;color:#9a9a9a}button,[role=button]{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:gomono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity: 1;border-color:rgba(189,189,189,var(--tw-border-opacity));--tw-blur: var(--tw-empty, );--tw-brightness: var(--tw-empty, );--tw-contrast: var(--tw-empty, );--tw-grayscale: var(--tw-empty, );--tw-hue-rotate: var(--tw-empty, );--tw-invert: var(--tw-empty, );--tw-saturate: var(--tw-empty, );--tw-sepia: var(--tw-empty, );--tw-drop-shadow: var(--tw-empty, );--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.absolute{position:absolute}.relative{position:relative}.top-0{top:0px}.left-0{left:0px}.top-2{top:.5rem}.m-16{margin:4rem}.m-2{margin:.5rem}.my-8{margin-top:2rem;margin-bottom:2rem}.my-0{margin-top:0;margin-bottom:0}.mx-auto{margin-left:auto;margin-right:auto}.my-24{margin-top:6rem;margin-bottom:6rem}.my-4{margin-top:1rem;margin-bottom:1rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mb-2{margin-bottom:.5rem}.mr-2{margin-right:.5rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.hidden{display:none}.h-screen{height:100vh}.h-8{height:2rem}.min-h-screen{min-height:100vh}.min-h-full{min-height:100%}.w-full{width:100%}.w-screen{width:100vw}.w-8{width:2rem}.w-64{width:16rem}.flex-1{flex:1 1 0%}.flex-grow{flex-grow:1}.transform{transform:var(--tw-transform)}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.self-center{align-self:center}.rounded-md{border-radius:.375rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-2{border-width:2px}.border-b-2{border-bottom-width:2px}.border-dashed{border-style:dashed}.border-dotted{border-style:dotted}.border-opacity-25{--tw-border-opacity: .25}.bg-dark{--tw-bg-opacity: 1;background-color:rgba(48,48,48,var(--tw-bg-opacity))}.bg-grunge{background-image:url(https://s.okno.rs/img/grunge.png)}.bg-cover{background-size:cover}.bg-center{background-position:center}.bg-no-repeat{background-repeat:no-repeat}.p-4{padding:1rem}.p-2{padding:.5rem}.p-8{padding:2rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-8{padding-left:2rem;padding-right:2rem}.pb-1{padding-bottom:.25rem}.pb-3{padding-bottom:.75rem}.pl-4{padding-left:1rem}.pb-8{padding-bottom:2rem}.pb-2{padding-bottom:.5rem}.text-center{text-align:center}.font-text{font-family:bariolregular,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.font-title{font-family:plan9regular,ui-serif,Georgia,Cambria,"Times New Roman",Times,serif}.text-xs{font-size:.75rem;line-height:1rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.uppercase{text-transform:uppercase}.leading-relaxed{line-height:1.625}.tracking-widest{letter-spacing:.1em}.text-light{--tw-text-opacity: 1;color:rgba(207,207,207,var(--tw-text-opacity))}.no-underline{text-decoration:none}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-20{opacity:.2}.filter{filter:var(--tw-filter)}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 640px){.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}@media (min-width: 768px){.md\\:container{width:100%}@media (min-width: 640px){.md\\:container{max-width:640px}}@media (min-width: 768px){.md\\:container{max-width:768px}}@media (min-width: 1024px){.md\\:container{max-width:1024px}}@media (min-width: 1280px){.md\\:container{max-width:1280px}}@media (min-width: 1536px){.md\\:container{max-width:1536px}}.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:flex{display:flex}.md\\:h-10{height:2.5rem}.md\\:w-10{width:2.5rem}.md\\:px-0{padding-left:0;padding-right:0}.md\\:text-5xl{font-size:3rem;line-height:1}}@media (min-width: 1024px){.lg\\:text-9xl{font-size:8rem;line-height:1}}@media (min-width: 1280px){.xl\\:text-5xl{font-size:3rem;line-height:1}}\n'] }, "src/routes/__error.svelte": { "entry": "pages/__error.svelte-546265cf.js", "css": [], "js": ["pages/__error.svelte-546265cf.js", "chunks/vendor-f8a0085d.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-617064ea.js", "css": [], "js": ["pages/index.svelte-617064ea.js", "chunks/vendor-f8a0085d.js"], "styles": [] }, "src/routes/[...parts].svelte": { "entry": "pages/[...parts].svelte-334b77bd.js", "css": [], "js": ["pages/[...parts].svelte-334b77bd.js", "chunks/vendor-f8a0085d.js", "chunks/Footer-d961b91b.js"], "styles": [] } };
  async function load_component(file) {
    const { entry, css: css2, js, styles } = metadata_lookup[file];
    return {
      module: await module_lookup[file](),
      entry: assets + "/_app/" + entry,
      css: css2.map((dep) => assets + "/_app/" + dep),
      js: js.map((dep) => assets + "/_app/" + dep),
      styles
    };
  }
  function render(request, {
    prerender
  } = {}) {
    const host = request.headers["host"];
    return respond({ ...request, host }, options, { prerender });
  }
  var Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `<footer class="${"w-full pb-1 text-center bg-dark text-body-1 "}"><a class="${"text-xs text-light outside-link"}" href="${"https://download.parallelcoin.info"}" rel="${"noreferrer noopener"}" target="${"_blank"}">Download the Wallet</a>
    </footer>`;
  });
  var css$a = {
    code: ".ufospace.svelte-1i477dw{width:128px;height:auto;cursor:pointer;opacity:0.62;transform:scale(0.62);animation:svelte-1i477dw-move-ufo 10s linear infinite;z-index:999999}@keyframes svelte-1i477dw-move-ufo{0%{transform:scale(0.62)}20%{transform:scale(0.72)}50%{transform:scale(0.38)}80%{transform:scale(0.92)}100%{transform:scale(0.62)}}",
    map: '{"version":3,"file":"Ufo.svelte","sources":["Ufo.svelte"],"sourcesContent":["    <a href=\\"https://where.parallelcoin.info/\\" class=\\"absolute left-0 top-2 ufospace\\">\\n        <amp-img\\n                alt=\\"ParallelCoin - Plan 9 from Crypt-Space - Ufo\\"\\n                src=\\"https://s.okno.rs/parallelcoin/img/ufo.webp\\"\\n                width=\\"300\\"\\n                height=\\"83\\"\\n                layout=\\"responsive\\"\\n        >\\n        </amp-img>\\n    </a>\\n\\n<style>\\n    .ufospace{\\n        width: 128px;\\n        height: auto;\\n        cursor: pointer;\\n        opacity: 0.62;\\n        transform: scale(0.62);\\n        animation: move-ufo 10s linear infinite;\\n        z-index: 999999;\\n    }\\n\\n    .ufospace img{\\n        width: 88%;\\n    }\\n\\n    @keyframes move-ufo {\\n        0% {\\n            transform: scale(0.62);\\n        }\\n        20% {\\n            transform: scale(0.72);\\n        }\\n        50% {\\n            transform: scale(0.38);\\n        }\\n        80% {\\n            transform: scale(0.92);\\n        }\\n        100% {\\n            transform: scale(0.62);\\n        }\\n    }\\n</style>\\n"],"names":[],"mappings":"AAYI,wBAAS,CAAC,AACN,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,SAAS,CAAE,uBAAQ,CAAC,GAAG,CAAC,MAAM,CAAC,QAAQ,CACvC,OAAO,CAAE,MAAM,AACnB,CAAC,AAMD,WAAW,uBAAS,CAAC,AACjB,EAAE,AAAC,CAAC,AACA,SAAS,CAAE,MAAM,IAAI,CAAC,AAC1B,CAAC,AACD,GAAG,AAAC,CAAC,AACD,SAAS,CAAE,MAAM,IAAI,CAAC,AAC1B,CAAC,AACD,GAAG,AAAC,CAAC,AACD,SAAS,CAAE,MAAM,IAAI,CAAC,AAC1B,CAAC,AACD,GAAG,AAAC,CAAC,AACD,SAAS,CAAE,MAAM,IAAI,CAAC,AAC1B,CAAC,AACD,IAAI,AAAC,CAAC,AACF,SAAS,CAAE,MAAM,IAAI,CAAC,AAC1B,CAAC,AACL,CAAC"}'
  };
  var Ufo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$a);
    return `<a href="${"https://where.parallelcoin.info/"}" class="${"absolute left-0 top-2 ufospace svelte-1i477dw"}"><amp-img alt="${"ParallelCoin - Plan 9 from Crypt-Space - Ufo"}" src="${"https://s.okno.rs/parallelcoin/img/ufo.webp"}" width="${"300"}" height="${"83"}" layout="${"responsive"}"></amp-img>
    </a>`;
  });
  var css$9 = {
    code: "@media(prefers-color-scheme: dark){#dark-mode-checkbox.svelte-pumf79.svelte-pumf79,#dark-mode-label.svelte-pumf79.svelte-pumf79{display:none}}#dark-mode-checkbox.svelte-pumf79:checked~.svelte-pumf79{color:white;background-color:black}#dark-mode-checkbox.svelte-pumf79.svelte-pumf79,#dark-mode-label.svelte-pumf79.svelte-pumf79{position:absolute}#dark-mode-checkbox.svelte-pumf79.svelte-pumf79{display:none}",
    map: `{"version":3,"file":"Themeselect.svelte","sources":["Themeselect.svelte"],"sourcesContent":["<script>\\n    export let isDarkMode;\\n\\n    // module.exports = {\\n    //     data() {\\n    //         return {\\n    //             isLoading: true,\\n    //             isDarkMode:true,\\n    //         }\\n    //     },\\n    //     mounted() {\\n    //         this.darkmode = this.$cookies.get('darkmode')\\n    //     },\\n    //     methods: {\\n    //         theme : function(){\\n    //             this.isDarkMode = !this.isDarkMode\\n    //             this.$cookies.set('darkmode', this.isDarkMode)\\n    //             this.$emit('darkmode', this.isDarkMode)\\n    //         },\\n    //     },\\n    //     components:{\\n    //     }\\n    // }\\n\\n<\/script>\\n\\n\\n\\n\\n<button class=\\"w-8 h-8 focus:outline-none m-2\\">\\n\\n    <input id=\\"dark-mode-checkbox\\" type=\\"checkbox\\">\\n    <label id=\\"dark-mode-label\\" for=\\"dark-mode-checkbox\\">Turn on dark mode</label>\\n\\n        <svg class=\\"w-8 h-8 md:w-10 md:h-10\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\">\\n            <path\\n                    d=\\"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z\\"\\n            />\\n        </svg>\\n        {#if isDarkMode}\\n        <svg class=\\"w-8 h-8 md:w-10 md:h-10\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke=\\"currentColor\\">\\n            <path\\n                    d=\\"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z\\"\\n            />\\n        </svg>\\n        {/if}\\n    </button>\\n<style>\\n    /**\\n        * If the user states they prefer dark, obey.\\n        * Don't offer the option to override.\\n        */\\n    @media (prefers-color-scheme: dark) {\\n        .wrapper, .wrapper h1 {\\n            color: white;\\n            background-color: black;\\n        }\\n\\n        #dark-mode-checkbox,\\n        #dark-mode-label {\\n            display: none;\\n        }\\n    }\\n\\n    /**\\n     * If the checkbox is checked, all adjacent siblings will be in dark mode.\\n     * This will only be possible if the user doesn't prefer dark,\\n     * or on browsers that don't understand \`prefers-color-scheme\`.\\n     */\\n    #dark-mode-checkbox:checked ~ * {\\n        color: white;\\n        background-color: black;\\n    }\\n\\n    /**\\n     * Position these absolutely so they don't \\"consume\\" space.\\n     */\\n    #dark-mode-checkbox,\\n    #dark-mode-label {\\n        position: absolute;\\n    }\\n\\n    /**\\n     * Don't display the ugly checkbox. On a real site, you could style the label\\n     * as a button and work with the \`:checked ::before\` selector of the checkbox\\n     * to convey the state.\\n     */\\n    #dark-mode-checkbox {\\n        display: none;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAoDI,MAAM,AAAC,uBAAuB,IAAI,CAAC,AAAC,CAAC,AAMjC,+CAAmB,CACnB,gBAAgB,4BAAC,CAAC,AACd,OAAO,CAAE,IAAI,AACjB,CAAC,AACL,CAAC,AAOD,iCAAmB,QAAQ,CAAG,cAAE,CAAC,AAC7B,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,AAC3B,CAAC,AAKD,+CAAmB,CACnB,gBAAgB,4BAAC,CAAC,AACd,QAAQ,CAAE,QAAQ,AACtB,CAAC,AAOD,mBAAmB,4BAAC,CAAC,AACjB,OAAO,CAAE,IAAI,AACjB,CAAC"}`
  };
  var Themeselect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { isDarkMode } = $$props;
    if ($$props.isDarkMode === void 0 && $$bindings.isDarkMode && isDarkMode !== void 0)
      $$bindings.isDarkMode(isDarkMode);
    $$result.css.add(css$9);
    return `<button class="${"w-8 h-8 focus:outline-none m-2"}"><input id="${"dark-mode-checkbox"}" type="${"checkbox"}" class="${"svelte-pumf79"}">
    <label id="${"dark-mode-label"}" for="${"dark-mode-checkbox"}" class="${"svelte-pumf79"}">Turn on dark mode</label>

        <svg class="${"w-8 h-8 md:w-10 md:h-10 svelte-pumf79"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path d="${"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}"></path></svg>
        ${isDarkMode ? `<svg class="${"w-8 h-8 md:w-10 md:h-10 svelte-pumf79"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path d="${"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}"></path></svg>` : ``}
    </button>`;
  });
  var css$8 = {
    code: ".logocolor.svelte-5nevbs{fill:#cfcfcf }svg.svelte-5nevbs{max-width:100%;max-height:100%}",
    map: '{"version":3,"file":"Logo.svelte","sources":["Logo.svelte"],"sourcesContent":["<script>\\n    export let size;\\n\\n<\/script>\\n\\n<div id=\\"logo\\" class=\\"self-center m-16 worp logo\\">\\n    <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" width=\\" {size}\\" height=\\" {size}\\" class=\\"logo\\">\\n        <path fill-rule=\\"evenodd\\" class=\\"logocolor\\" d=\\"M305.12 21.28C319.17 21.3 334.15 23.19 347.25 26.95C361.29 30.71 372.52 36.32 384.69 43.81C406.21 57.87 423.05 74.74 436.14 97.22C450.17 119.71 455.77 144.98 455.75 172.13C455.73 198.35 449.16 223.61 436.04 246.07C422.92 269.47 406.06 287.25 384.51 300.35C372.34 307.83 359.23 314.38 347.06 318.11C333 321.84 318.96 323.71 304.92 323.69L304.95 271.27C330.23 270.35 353.65 261.95 374.26 242.3C394.87 222.65 405.17 199.24 405.19 171.15C405.21 143.07 395.86 119.65 376.22 99.98C356.57 80.31 333.17 70.93 305.09 70.91C277 70.9 252.66 80.24 233.92 99.88C214.24 119.54 204.85 142.93 204.84 171.02L204.62 482.79C193.4 471.54 175.64 454.68 154.12 433.13L154.29 170.99C154.3 156.94 156.18 142.91 159.93 129.81C163.69 115.77 169.3 103.6 176.8 92.37C190.86 70.85 207.73 53.99 230.21 39.97C252.69 26.87 277.97 21.27 305.12 21.28ZM304.12 123.34C330.34 123.36 351.85 144.9 351.83 171.12C351.82 197.33 330.27 218.87 304.05 218.84C276.9 219.77 256.31 198.2 256.33 171.05C256.34 144.84 277.91 123.32 304.12 123.34ZM116.85 152.23L116.68 404.09C94.24 381.6 76.46 364.73 66.17 353.49L66.3 152.2L116.85 152.23Z\\" />\\n    </svg>\\n</div>\\n\\n<style>\\n    tspan { white-space:pre }\\n    .logocolor { fill: #cfcfcf }\\n    .light .logocolor { fill: #303030 }\\n    .dark .logocolor { fill: #cfcfcf }\\n    svg{max-width: 100%;max-height: 100%;}\\n</style>\\n\\n"],"names":[],"mappings":"AAaI,UAAU,cAAC,CAAC,AAAC,IAAI,CAAE,OAAO,CAAC,CAAC,AAG5B,iBAAG,CAAC,SAAS,CAAE,IAAI,CAAC,UAAU,CAAE,IAAI,AAAC,CAAC"}'
  };
  var Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { size } = $$props;
    if ($$props.size === void 0 && $$bindings.size && size !== void 0)
      $$bindings.size(size);
    $$result.css.add(css$8);
    return `<div id="${"logo"}" class="${"self-center m-16 worp logo"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}" width="${" " + escape(size)}" height="${" " + escape(size)}" class="${"logo svelte-5nevbs"}"><path fill-rule="${"evenodd"}" class="${"logocolor svelte-5nevbs"}" d="${"M305.12 21.28C319.17 21.3 334.15 23.19 347.25 26.95C361.29 30.71 372.52 36.32 384.69 43.81C406.21 57.87 423.05 74.74 436.14 97.22C450.17 119.71 455.77 144.98 455.75 172.13C455.73 198.35 449.16 223.61 436.04 246.07C422.92 269.47 406.06 287.25 384.51 300.35C372.34 307.83 359.23 314.38 347.06 318.11C333 321.84 318.96 323.71 304.92 323.69L304.95 271.27C330.23 270.35 353.65 261.95 374.26 242.3C394.87 222.65 405.17 199.24 405.19 171.15C405.21 143.07 395.86 119.65 376.22 99.98C356.57 80.31 333.17 70.93 305.09 70.91C277 70.9 252.66 80.24 233.92 99.88C214.24 119.54 204.85 142.93 204.84 171.02L204.62 482.79C193.4 471.54 175.64 454.68 154.12 433.13L154.29 170.99C154.3 156.94 156.18 142.91 159.93 129.81C163.69 115.77 169.3 103.6 176.8 92.37C190.86 70.85 207.73 53.99 230.21 39.97C252.69 26.87 277.97 21.27 305.12 21.28ZM304.12 123.34C330.34 123.36 351.85 144.9 351.83 171.12C351.82 197.33 330.27 218.87 304.05 218.84C276.9 219.77 256.31 198.2 256.33 171.05C256.34 144.84 277.91 123.32 304.12 123.34ZM116.85 152.23L116.68 404.09C94.24 381.6 76.46 364.73 66.17 353.49L66.3 152.2L116.85 152.23Z"}"></path></svg>
</div>`;
  });
  var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `<header class="${"relative flex flex-col items-center justify-center w-full"}"><div class="${"relative flex flex-row items-center justify-center md:container md:mx-auto md:px-0 "}">${validate_component(Ufo, "Ufo").$$render($$result, {}, {}, {})}
            <a href="${"/"}" class="${"p-4 dark"}">${validate_component(Logo, "Logo").$$render($$result, { size: "64" }, {}, {})}</a>

            ${validate_component(Themeselect, "Themeselect").$$render($$result, { darkmode: "darkmode" }, {}, {})}</div>
        
                <h1 class="${"text-sm tracking-widest uppercase xl:text-5xl text-light font-title md:container md:mx-auto md:px-0 "}">${slots.default ? slots.default({}) : ``}</h1></header>`;
  });
  var css$7 = {
    code: ".bg.svelte-5wkjkw{position:fixed;width:100vw;height:100vh;overflow:hidden;margin:0;padding:0;background:#303030 url(https://s.okno.rs/parallelcoin/img/bg.jpg);z-index:-1;filter:none}.space.svelte-5wkjkw{position:fixed;width:400vw;height:400vh;top:50%;left:50%;margin-top:-200vh;margin-left:-200vw;animation:svelte-5wkjkw-space-rotate 999s linear infinite;background-size:240px;-webkit-backface-visibility:visible;backface-visibility:visible;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTA2IDkwaDJ2MmgtMnpNNzQgNjNoMXYxaC0xek0yMyA2NmgxdjFoLTF6TTUwIDExMGgxdjFoLTF6TTYzIDEyOGgxdjFoLTF6TTQ1IDE0OWgxdjFoLTF6TTkyIDE1MWgxdjFoLTF6TTU4IDhoMXYxaC0xek0xNDcgMzNoMnYyaC0yek05MSA0M2gxdjFoLTF6TTE2OSAyOWgxdjFoLTF6TTE4MiAxOWgxdjFoLTF6TTE2MSA1OWgxdjFoLTF6TTEzOCA5NWgxdjFoLTF6TTE5OSA3MWgzdjNoLTN6TTIxMyAxNTNoMnYyaC0yek0xMjggMTYzaDF2MWgtMXpNMjA1IDE3NGgxdjFoLTF6TTE1MiAyMDBoMXYxaC0xek01MiAyMTFoMnYyaC0yek0wIDE5MWgxdjFIMHpNMTEwIDE4NGgxdjFoLTF6Ii8+PC9zdmc+)}@keyframes svelte-5wkjkw-space-rotate{to{transform:rotate(-360deg)}}",
    map: '{"version":3,"file":"Bg.svelte","sources":["Bg.svelte"],"sourcesContent":["    <div class=\\"bg\\">\\n        <div class=\\"space\\"></div>\\n        <div class=\\"w-screen h-screen bg-center bg-no-repeat bg-cover bg-grunge opacity-20\\"></div>\\n    </div>\\n<style>\\n    \\n    .bg{\\n        position: fixed;\\n        width: 100vw;\\n        height: 100vh;\\n        overflow: hidden;\\n        margin: 0;\\n        padding: 0;\\n        background: #303030 url(https://s.okno.rs/parallelcoin/img/bg.jpg);\\n        z-index: -1;\\n        filter: none;\\n    }\\n\\n\\n    .space {\\n        position:fixed;\\n        width: 400vw;\\n        height: 400vh;\\n        top: 50%;\\n        left: 50%;\\n        margin-top: -200vh;\\n        margin-left: -200vw;\\n        animation: space-rotate 999s linear infinite;\\n        background-size: 240px;\\n        -webkit-backface-visibility: visible;\\n        backface-visibility: visible;\\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTA2IDkwaDJ2MmgtMnpNNzQgNjNoMXYxaC0xek0yMyA2NmgxdjFoLTF6TTUwIDExMGgxdjFoLTF6TTYzIDEyOGgxdjFoLTF6TTQ1IDE0OWgxdjFoLTF6TTkyIDE1MWgxdjFoLTF6TTU4IDhoMXYxaC0xek0xNDcgMzNoMnYyaC0yek05MSA0M2gxdjFoLTF6TTE2OSAyOWgxdjFoLTF6TTE4MiAxOWgxdjFoLTF6TTE2MSA1OWgxdjFoLTF6TTEzOCA5NWgxdjFoLTF6TTE5OSA3MWgzdjNoLTN6TTIxMyAxNTNoMnYyaC0yek0xMjggMTYzaDF2MWgtMXpNMjA1IDE3NGgxdjFoLTF6TTE1MiAyMDBoMXYxaC0xek01MiAyMTFoMnYyaC0yek0wIDE5MWgxdjFIMHpNMTEwIDE4NGgxdjFoLTF6Ii8+PC9zdmc+);\\n    }\\n    @keyframes space-rotate{to{transform:rotate(-360deg)}}\\n</style>\\n"],"names":[],"mappings":"AAMI,iBAAG,CAAC,AACA,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IAAI,yCAAyC,CAAC,CAClE,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,IAAI,AAChB,CAAC,AAGD,MAAM,cAAC,CAAC,AACJ,SAAS,KAAK,CACd,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,0BAAY,CAAC,IAAI,CAAC,MAAM,CAAC,QAAQ,CAC5C,eAAe,CAAE,KAAK,CACtB,2BAA2B,CAAE,OAAO,CACpC,mBAAmB,CAAE,OAAO,CAC5B,gBAAgB,CAAE,IAAI,0kBAA0kB,CAAC,AACrmB,CAAC,AACD,WAAW,0BAAY,CAAC,EAAE,CAAC,UAAU,OAAO,OAAO,CAAC,CAAC,CAAC"}'
  };
  var Bg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$7);
    return `<div class="${"bg svelte-5wkjkw"}"><div class="${"space svelte-5wkjkw"}"></div>
        <div class="${"w-screen h-screen bg-center bg-no-repeat bg-cover bg-grunge opacity-20"}"></div>
    </div>`;
  });
  var sub;
  async function load$1({ page, fetch: fetch2, session, context }) {
    let hostPort = page.host.split(":");
    let host = hostPort[0].split(".");
    if (page.params.parts)
      ;
    sub = host[0];
    return {
      props: {
        sub
      }
    };
  }
  var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    setContext("sub", sub);
    return `${$$result.head += `<script async custom-element="${"amp-list"}" src="${"https://cdn.ampproject.org/v0/amp-list-0.1.js"}" data-svelte="svelte-1jiwcg0"><\/script><script async custom-template="${"amp-mustache"}" src="${"https://cdn.ampproject.org/v0/amp-mustache-0.2.js"}" data-svelte="svelte-1jiwcg0"><\/script><script async custom-element="${"amp-form"}" src="${"https://cdn.ampproject.org/v0/amp-form-0.1.js"}" data-svelte="svelte-1jiwcg0"><\/script><script async custom-element="${"amp-sidebar"}" src="${"https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"}" data-svelte="svelte-1jiwcg0"><\/script><script async custom-element="${"amp-bind"}" src="${"https://cdn.ampproject.org/v0/amp-bind-0.1.js"}" data-svelte="svelte-1jiwcg0"><\/script><script async custom-element="${"amp-iframe"}" src="${"https://cdn.ampproject.org/v0/amp-iframe-0.1.js"}" data-svelte="svelte-1jiwcg0"><\/script><script async custom-element="${"amp-font"}" src="${"https://cdn.ampproject.org/v0/amp-font-0.1.js"}" data-svelte="svelte-1jiwcg0"><\/script>`, ""}


${sub === "legacy" ? `${slots.default ? slots.default({}) : ``}` : `${sub === "parallelcoin" ? `${slots.default ? slots.default({}) : ``}` : `<div id="${"layout"}" class="${"relative flex flex-col items-center justify-between min-h-screen antialiased font-text text-text-primary "}">${validate_component(Bg, "Bg").$$render($$result, {}, {}, {})}
    ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <main class="${"flex flex-col flex-1 w-full text-text-primary"}">${slots.default ? slots.default({}) : ``}</main>
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`}`}`;
  });
  var __layout = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _layout,
    load: load$1
  });
  function load({ error: error2, status }) {
    return {
      props: { title: `${status}: ${error2.message}` }
    };
  }
  var _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { title } = $$props;
    if ($$props.title === void 0 && $$bindings.title && title !== void 0)
      $$bindings.title(title);
    return `<h1>${escape(title)}</h1>`;
  });
  var __error = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _error,
    load
  });
  var css$6 = {
    code: "@-webkit-keyframes svelte-av703k-spinAround{from{-webkit-transform:rotate(0deg)\n          }to{-webkit-transform:rotate(360deg)}}@-moz-keyframes svelte-av703k-spinAround{from{-moz-transform:rotate(0deg)\n          }to{-moz-transform:rotate(360deg)}}@keyframes svelte-av703k-spinAround{from{transform:rotate(0deg)\n          }to{transform:rotate(360deg)}}@media(min-width:777px){}@media(min-width:1999px){}",
    map: `{"version":3,"file":"ParallelCoin.svelte","sources":["ParallelCoin.svelte"],"sourcesContent":["<script>\\n\\n\\n\\n  <\/script>\\n  <svelte:head>\\n     <title>ParallelCoin - Plan 9 from Cryptospace</title>\\n     <link rel=\\"canonical\\" href=\\"https://parallelcoin.info/\\">\\n  </svelte:head>\\n\\n\\n<div class=\\"w-full h-screen\\"><amp-iframe layout=\\"fill\\" sandbox=\\"allow-scripts allow-same-origin allow-popups\\" src=\\"https://plan9.parallelcoin.info/\\"><amp-img layout=\\"responsive\\" src=\\"https://s.okno.rs/parallelcoin/img/splash.svg\\" placeholder></amp-img></amp-iframe></div>\\n\\n <style>\\n    \\n     #poster { \\n          perspective: 60vmax;\\n          width: 100%;\\n          position: relative;\\n          min-height: 100%;\\n         margin: 0 auto;\\n     }\\n     \\n     #banner { \\n          text-transform: uppercase; \\n          text-align: center; \\n          font-size: 3vmin;\\n          width: 62%;\\n     \\n          line-height: .9; \\n          transform-origin: top left; \\n          transform: rotateX(15deg) skewX(9deg) translateX(0);\\n          background: #fff; \\n          position: relative;\\n          height: 100%;\\n     }\\n     #banner h1 {\\n          top:24vmax;\\n          font-family: 'plan9regular', sans-serif; \\n          color: #CF3030;\\n          font-size: 12vmin;\\n          letter-spacing: .2vmin;\\n       line-height: 1.2;\\n     }\\n     #banner .intro {\\n          padding: 0 9vmin;\\n          font-family: 'bariolregular', sans-serif; \\n          font-size: 0.9rem;\\n          letter-spacing: 0;\\n          line-height: 1.6;\\n     }\\n     #posterimgs{\\n          position: relative;\\n          width: 100%;\\n          height: 100%;\\n     }\\n     #man {\\n          position: absolute;\\n          bottom: 0px;\\n          left: 0px;\\n          max-width: 38vh;\\n          max-height: 200px;\\n     }\\n     #men {\\n          position: absolute;\\n          bottom: 0;\\n          left: 50px;\\n          max-width: 38vh;\\n          max-height: 100px;\\n     }\\n     #dig {\\n          position: absolute;\\n          bottom: 30px;\\n          right:20px;\\n          max-width: 38vh;\\n          max-height: 100px;\\n     }\\n     #woman {\\n          position: absolute;\\n          bottom: 120px;\\n          right: 0;\\n          max-width: 38vh;\\n          max-height:160px;\\n     }\\n     #grave {\\n          position: absolute;\\n          bottom: 80px;\\n          right: 0px;\\n          max-width: 38vh;\\n          max-height: 100px;\\n     }\\n     #plan9 {\\n          position: absolute;\\n          bottom: 0;\\n       width:100%;\\n     }\\n     #spaceship {\\n          position: absolute;\\n          top: 20px;\\n          right: 9%;\\n          max-width: 38vh;\\n          max-height: 150px;\\n     }\\n     #credits {\\n          position: absolute;\\n          top:72vmax;\\n          right: 3vmax;\\n       width: 50%;\\n          text-align: center;\\n     }\\n     #credits span:first-of-type {\\n          font-size: 16px;\\n          letter-spacing: 1px;\\n          margin-top: 1rem;\\n       line-height: 1.6;\\n     }\\n     .actor {\\n          text-transform: uppercase;\\n          font-size: 12px;\\n          letter-spacing: 0;\\n          display: block;\\n          line-height: 1.2;\\n     }\\n     .production {\\n          font-size: 6px;\\n          letter-spacing: 0px;\\n          font-family: 'bariolregular'; \\n          line-height: 0.2;\\n     }\\n     \\n     \\n     .link{\\n          position: absolute;\\n          bottom: 5vmax;\\n          background-color: #cfcfcf;\\n          background-size: 88%;\\n          background-repeat: no-repeat;\\n          background-position: center;\\n          border-radius: 100%;\\n     }\\n     \\n     .link {\\n          width: 92px;\\n          height: 92px;\\n          box-shadow: 0 0 0 4px rgba(255, 255, 255, 1);\\n     }\\n     .link.small {\\n          width:45px;\\n          height:45px;\\n     }\\n     .link.mini {\\n          width:30px;\\n          height:30px;\\n     }\\n     .hovicon.effect-4:before {\\n          line-height: 92px;\\n     }\\n     .hovicon.effect-4:after {\\n          top: -4px;\\n          left: -4px;\\n          padding: 0;\\n          z-index: 10;\\n          border: 4px dashed #fff;\\n     }\\n     .hovicon.effect-4:hover {\\n          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\\n          color: #fff;\\n     }\\n     .hovicon.effect-4:hover i {\\n          color: #fff;\\n     }\\n     /* Effect 4b */\\n     .link:hover {\\n          -webkit-transition: box-shadow 0.2s;\\n          -moz-transition: box-shadow 0.2s;\\n          transition: box-shadow 0.2s;\\n     }\\n     .link:hover:after {\\n          -webkit-animation: spinAround 9s linear infinite;\\n          -moz-animation: spinAround 9s linear infinite;\\n          animation: spinAround 9s linear infinite;\\n     }\\n     @-webkit-keyframes spinAround {\\n          from {\\n               -webkit-transform: rotate(0deg)\\n          }\\n          to {\\n               -webkit-transform: rotate(360deg);\\n          }\\n     }\\n     @-moz-keyframes spinAround {\\n          from {\\n               -moz-transform: rotate(0deg)\\n          }\\n          to {\\n               -moz-transform: rotate(360deg);\\n          }\\n     }\\n     @keyframes spinAround {\\n          from {\\n               transform: rotate(0deg)\\n          }\\n          to {\\n               transform: rotate(360deg);\\n          }\\n     }\\n     \\n     \\n     .legacy{\\n          left: 12vmax;\\n          background-image: url(\\"https://s.okno.rs/img/go/legacy.png\\");\\n          background-size: 100%;\\n          background-position: -10% bottom;\\n     }\\n     .plan{\\n          right: 12vmax;\\n          background-image: url(\\"https://s.okno.rs/img/go/p9c.png\\");\\n     }\\n     #skrollr-body {width:100%; height:100%; position:fixed; }\\n     #skrollr-body div {overflow:hidden; position:absolute; }\\n     \\n     .centered { top:0; bottom:0; left:0; right:0; margin:auto; }\\n     \\n     #slide1     {z-index:10; background: linear-gradient(rgba(48,128,207,0.38),rgba(255,255,255,0.38) 62%);}\\n     #slide1 h1  {position:absolute; text-align: center; width:72%; left:0; right:0; margin:0 auto;}\\n     \\n     \\n     #slide2     {z-index:9;}\\n     #slide2 h2  {position:absolute; text-align: center; left:0; right:0; margin:15% auto 0;white-space: nowrap;}\\n     \\n     img.biker     {position:absolute; bottom: 0;max-width:160px;}\\n     img.gopherru     {position:absolute; top: 3%;max-width:140px;}\\n     img.ufo     {position:absolute; top: 5%;}\\n     \\n     img.gophersr  {position:absolute; bottom: 45%;max-width:120px;}\\n     img.gopherhb  {position:absolute; bottom: 45%;max-width:60px;z-index:-2;}\\n     img.sgopher  {position:absolute; top: 5%;max-width:140px;}\\n     img.bgopher  {position:absolute;bottom: 35%;max-width:60px;}\\n     \\n     span.road    {position:absolute; bottom:0;width:900%; height:100px; background: url(https://s.okno.rs/parallelcoin/img/road.jpg) repeat-x; z-index: -1; background-size: 300px;}\\n     \\n     span.trees   {position:absolute; left:-60px;bottom:90px;width:600%; height:380px; background: url(https://s.okno.rs/parallelcoin/img/trees.png) repeat-x; z-index: -2; background-size: 300px; opacity: 1}\\n     span.trees2   {position:absolute; bottom:0px;width:600%; height:260px; background:url(https://s.okno.rs/parallelcoin/img/trees.png) repeat-x; z-index: -3; background-size: 200px; opacity: .6}\\n     \\n     \\n     #slide3 .logo    {width:62vmin; height:62vmin;z-index:10;}\\n     #slide3 h2  {position:absolute; text-align: center; left:0; right:0; top:8rem; bottom:0; margin:0 auto;}\\n     img.parallelcoin {position:absolute; left:0; right:0; margin:0 auto;}\\n     \\n     \\n     \\n     \\n     @media (min-width:777px){\\n          button.tab{\\n               border-left-width:4px;\\n               border-bottom-width:0\\n          }\\n          button.active-tab,button.tab:hover{\\n               color:var(--purple);\\n               color:rgba(59,121,119,var(--text-opacity))\\n          }\\n          button.active-tab,button.active-tab:hover,button.tab:hover{\\n               --text-opacity:1;\\n               border-left-width:4px;\\n               border-bottom-width:0\\n          }\\n          button.active-tab:hover{\\n               color:#4a5568;\\n               color:rgba(74,85,104,var(--text-opacity))\\n          }\\n          #posterimgs{\\n               max-width: 64rem;\\n          }\\n          #banner {\\n               width: 62%;\\n               max-width: 42rem;\\n               transform: rotateX(15deg) skewX(15deg) translateX(3vw);\\n          }\\n          #banner h1 {\\n               top:12rem;\\n               font-size: 9rem;\\n               letter-spacing: 1px;\\n               line-height: 1.1;\\n          }\\n          #banner .intro {\\n               top:4rem;\\n               width: 100%;\\n               padding: 0;\\n               font-size: 1rem;\\n               letter-spacing: 2px;\\n               line-height: 1.2;\\n          }\\n          #banner .intro span{\\n               display: block;\\n               margin: 0 auto;\\n               max-width: 16rem;\\n          }\\n          #man {\\n               position: absolute;\\n               bottom: 0px;\\n               left: 0px;\\n               max-width: 320px;\\n               max-height: 480px;\\n          }\\n          #men {\\n               position: absolute;\\n               bottom: 10px;\\n               left: 100px;\\n               max-width: 240px;\\n               max-height: 240px;\\n          }\\n          #dig {\\n               position: absolute;\\n               bottom: 350px;\\n               right:200px;\\n               max-width: 38vh;\\n               max-height: 62vw;\\n          }\\n          #woman {\\n               position: absolute;\\n               bottom: 3rem;\\n               right: 0;\\n               max-width: 120px;\\n               max-height: 280px;\\n          }\\n          #grave {\\n               position: absolute;\\n               bottom: 180px;\\n               right: 0px;\\n               max-width: 38vh;\\n               max-height: 62vw;\\n          }\\n          #plan9 {\\n               position: absolute;\\n               bottom: 0;\\n               width:100%;\\n          }\\n          #spaceship {\\n               position: absolute;\\n               top: 80px;\\n               right:0;\\n               max-width: 240px;\\n               max-height: 240px;\\n          }\\n          #credits {\\n               position: absolute;\\n               top:52rem;\\n               right: 3vmax;\\n               width: 50%;\\n               text-align: center;\\n          }\\n          #credits span:first-of-type {\\n               font-size: 0.6rem;\\n               letter-spacing: 1px;\\n               margin-top: 1rem;\\n               line-height: 1.6;\\n          }\\n          .actor {\\n               text-transform: uppercase;\\n               font-size: 1.2rem;\\n               letter-spacing: 0;\\n               display: block;\\n               line-height: 1.2;\\n          }\\n          .production {\\n               font-size: 0.6rem;\\n               letter-spacing: 0px;\\n               line-height: 0.2;\\n          }\\n     \\n     }\\n     \\n     @media (min-width:1999px){\\n          #banner {\\n               max-width: 72rem;\\n               transform: rotateX(15deg) skewX(15deg) translateX(3vw);\\n          }\\n          #banner h1 {\\n     \\n          }\\n          #posterimgs{\\n               max-width: 111rem;\\n          }\\n          #man {\\n               max-width: 440px;\\n               max-height: 820px;\\n          }\\n          #men {\\n               max-width: 480px;\\n               max-height: 480px;\\n               left:200px;\\n          }\\n          #dig {\\n               max-width: 38vh;\\n               max-height: 62vw;\\n          }\\n          #woman {\\n               max-width: 240px;\\n               max-height: 560px;\\n          }\\n     }\\n     </style>"],"names":[],"mappings":"AAsLK,mBAAmB,wBAAW,CAAC,AAC1B,IAAI,AAAC,CAAC,AACD,iBAAiB,CAAE,OAAO,IAAI,CAAC;UACpC,CAAC,AACD,EAAE,AAAC,CAAC,AACC,iBAAiB,CAAE,OAAO,MAAM,CAAC,AACtC,CAAC,AACN,CAAC,AACD,gBAAgB,wBAAW,CAAC,AACvB,IAAI,AAAC,CAAC,AACD,cAAc,CAAE,OAAO,IAAI,CAAC;UACjC,CAAC,AACD,EAAE,AAAC,CAAC,AACC,cAAc,CAAE,OAAO,MAAM,CAAC,AACnC,CAAC,AACN,CAAC,AACD,WAAW,wBAAW,CAAC,AAClB,IAAI,AAAC,CAAC,AACD,SAAS,CAAE,OAAO,IAAI,CAAC;UAC5B,CAAC,AACD,EAAE,AAAC,CAAC,AACC,SAAS,CAAE,OAAO,MAAM,CAAC,AAC9B,CAAC,AACN,CAAC,AA+CD,MAAM,AAAC,WAAW,KAAK,CAAC,CAAC,AAsHzB,CAAC,AAED,MAAM,AAAC,WAAW,MAAM,CAAC,CAAC,AA4B1B,CAAC"}`
  };
  var ParallelCoin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$6);
    return `${$$result.head += `${$$result.title = `<title>ParallelCoin - Plan 9 from Cryptospace</title>`, ""}<link rel="${"canonical"}" href="${"https://parallelcoin.info/"}" data-svelte="svelte-1sfw7j3">`, ""}


<div class="${"w-full h-screen"}"><amp-iframe layout="${"fill"}" sandbox="${"allow-scripts allow-same-origin allow-popups"}" src="${"https://plan9.parallelcoin.info/"}"><amp-img layout="${"responsive"}" src="${"https://s.okno.rs/parallelcoin/img/splash.svg"}" placeholder></amp-img></amp-iframe></div>`;
  });
  var css$5 = {
    code: ".intro.svelte-8x1o2q{color:rgb(207,207,207);display:block;font-family:'plan9regular', cursive;text-shadow:1px 1px black;transform:rotate(-10deg)}.intro--the.svelte-8x1o2q{transform:rotate(-10deg) translate(13px, -9px)}.intro--num.svelte-8x1o2q{background:rgb(207,207,207);border:1px dotted rgb(40,40,40);color:rgb(20, 60, 80);display:inline-block;font-family:sans-serif;font-size:6px;font-weight:bolder;padding:4px 6px 2px;position:absolute;text-shadow:none;transform:rotate(-10deg) translate(25px, -9px)}",
    map: `{"version":3,"file":"HeadTitle.svelte","sources":["HeadTitle.svelte"],"sourcesContent":["  <div class=\\"relative flex flex-col justify-center\\">\\n    <div class=\\"relative flex flex-col justify-center\\">\\n      <div class=\\"absolute top-0 left-0 inline-block intro\\">\\n        <span class=\\"intro intro--the\\">Plan 9</span>\\n        <span class=\\"intro intro--num\\">from</span>\\n        <span class=\\"intro\\">Crypto Space</span>\\n      </div>\\n      <h1 class=\\"text-2xl\\tsm:text-3xl\\tmd:text-5xl\\tlg:text-9xl\\tfont-title text-light uppercase\\"><slot></slot></h1>\\n      </div>\\n    </div>\\n\\n\\n<style>\\n.intro {\\n  color: rgb(207,207,207);\\n  display: block;\\n  font-family: 'plan9regular', cursive;\\n  \\n  text-shadow: 1px 1px black;\\n  transform: rotate(-10deg);\\n}\\n\\n.intro--the {\\n  transform: rotate(-10deg) translate(13px, -9px);\\n}\\n\\n.intro--num {\\n  background: rgb(207,207,207);\\n  border: 1px dotted rgb(40,40,40);\\n  color: rgb(20, 60, 80);\\n  display: inline-block;\\n  font-family: sans-serif;\\n  font-size: 6px;\\n  font-weight: bolder;\\n  padding: 4px 6px 2px;\\n  position: absolute;\\n  text-shadow: none;\\n  transform: rotate(-10deg) translate(25px, -9px);\\n}\\n\\n</style>\\n\\n\\n\\n"],"names":[],"mappings":"AAaA,MAAM,cAAC,CAAC,AACN,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CACvB,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,cAAc,CAAC,CAAC,OAAO,CAEpC,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,KAAK,CAC1B,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AAED,WAAW,cAAC,CAAC,AACX,SAAS,CAAE,OAAO,MAAM,CAAC,CAAC,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,AACjD,CAAC,AAED,WAAW,cAAC,CAAC,AACX,UAAU,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAC5B,MAAM,CAAE,GAAG,CAAC,MAAM,CAAC,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAChC,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACtB,OAAO,CAAE,YAAY,CACrB,WAAW,CAAE,UAAU,CACvB,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CACpB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,OAAO,MAAM,CAAC,CAAC,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,AACjD,CAAC"}`
  };
  var HeadTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$5);
    return `<div class="${"relative flex flex-col justify-center"}"><div class="${"relative flex flex-col justify-center"}"><div class="${"absolute top-0 left-0 inline-block intro svelte-8x1o2q"}"><span class="${"intro intro--the svelte-8x1o2q"}">Plan 9</span>
        <span class="${"intro intro--num svelte-8x1o2q"}">from</span>
        <span class="${"intro svelte-8x1o2q"}">Crypto Space</span></div>
      <h1 class="${"text-2xl sm:text-3xl md:text-5xl lg:text-9xl font-title text-light uppercase"}">${slots.default ? slots.default({}) : ``}</h1></div>
    </div>`;
  });
  var WWW = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `${validate_component(HeadTitle, "HeadTitle").$$render($$result, {}, {}, { default: () => `www is deprecated...` })}`;
  });
  var css$4 = {
    code: "@keyframes svelte-1506qwl-fa-spin{0%{transform:rotate(0deg)\n  }100%{transform:rotate(360deg)\n  }}",
    map: '{"version":3,"file":"Socials.svelte","sources":["Socials.svelte"],"sourcesContent":["  <div>\\n  <h3 class=\\"mb-2 text-2xl\\">Social networks</h3>\\n\\n  \\n  <!-- <div class=\\"flex justify-evenly socials\\">\\n    <a href=\\"https://bitcointalk.org/index.php?topic=1097017.0\\" target=\\"_blank\\" class=\\"p-2\\">\\n      <svg version=\\"1.1\\" class=\\"fa-icon\\" width=\\"57.142857142857146\\" height=\\"80\\" role=\\"presentation\\" viewBox=\\"0 0 1280 1792\\" style=\\"font-size: 5em\\"><path key=\\"path-0\\" d=\\"M1167 640q18 182-131 258 117 28 175 103t45 214q-7 71-32.5 125t-64.5 89-97 58.5-121.5 34.5-145.5 15v255h-154v-251q-80 0-122-1v252h-154v-255q-18 0-54-0.5t-55-0.5h-200l31-183h111q50 0 58-51v-402h16q-6-1-16-1v-287q-13-68-89-68h-111v-164l212 1q64 0 97-1v-252h154v247q82-2 122-2v-245h154v252q79 7 140 22.5t113 45 82.5 78 36.5 114.5zM952 1185q0-36-15-64t-37-46-57.5-30.5-65.5-18.5-74-9-69-3-64.5 1-47.5 1v338q8 0 37 0.5t48 0.5 53-1.5 58.5-4 57-8.5 55.5-14 47.5-21 39.5-30 24.5-40 9.5-51zM881 709q0-33-12.5-58.5t-30.5-42-48-28-55-16.5-61.5-8-58-2.5-54 1-39.5 0.5v307q5 0 34.5 0.5t46.5 0 50-2 55-5.5 51.5-11 48.5-18.5 37-27 27-38.5 9-51z\\"></path>  </svg>\\n    </a>\\n    <a href=\\"https://twitter.com/parallelcoinduo\\" target=\\"_blank\\" class=\\"p-2\\">\\n      <svg version=\\"1.1\\" class=\\"fa-icon\\" width=\\"74.28571428571429\\" height=\\"80\\" role=\\"presentation\\" viewBox=\\"0 0 1664 1792\\" style=\\"font-size: 5em\\"><path key=\\"path-0\\" d=\\"M1620 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z\\"></path>  </svg>\\n    </a>\\n    <a href=\\"https://www.reddit.com/user/Parallelcoin/\\" target=\\"_blank\\" class=\\"p-2\\">\\n      <svg version=\\"1.1\\" class=\\"fa-icon\\" width=\\"80\\" height=\\"80\\" role=\\"presentation\\" viewBox=\\"0 0 1792 1792\\" style=\\"font-size: 5em\\"><path key=\\"path-0\\" d=\\"M1095 1167q16 16 0 31-62 62-199 62t-199-62q-16-15 0-31 6-6 15-6t15 6q48 49 169 49 120 0 169-49 6-6 15-6t15 6zM788 986q0 37-26 63t-63 26-63.5-26-26.5-63q0-38 26.5-64t63.5-26 63 26.5 26 63.5zM1183 986q0 37-26.5 63t-63.5 26-63-26-26-63 26-63.5 63-26.5 63.5 26 26.5 64zM1434 866q0-49-35-84t-85-35-86 36q-130-90-311-96l63-283 200 45q0 37 26 63t63 26 63.5-26.5 26.5-63.5-26.5-63.5-63.5-26.5q-54 0-80 50l-221-49q-19-5-25 16l-69 312q-180 7-309 97-35-37-87-37-50 0-85 35t-35 84q0 35 18.5 64t49.5 44q-6 27-6 56 0 142 140 243t337 101q198 0 338-101t140-243q0-32-7-57 30-15 48-43.5t18-63.5zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z\\"></path>  </svg>\\n    </a>\\n    <a href=\\"https://www.facebook.com/parallelcoin\\" target=\\"_blank\\" class=\\"p-2\\">\\n      <svg version=\\"1.1\\" class=\\"fa-icon\\" width=\\"45.71428571428571\\" height=\\"80\\" role=\\"presentation\\" viewBox=\\"0 0 1024 1792\\" style=\\"font-size: 5em\\"><path key=\\"path-0\\" d=\\"M959 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z\\"></path>\\n      </svg>\\n    </a>\\n  </div> -->\\n  </div>\\n<style>\\n.fa-icon{\\n  display:inline-block;\\n  fill:currentColor\\n}\\n.fa-flip-horizontal{\\n  transform:scale(-1, 1)\\n}\\n.fa-flip-vertical{\\n  transform:scale(1, -1)\\n}\\n.fa-spin{\\n  animation:fa-spin 1s 0s infinite linear\\n}\\n.fa-inverse{\\n  color:#fff\\n}\\n.fa-pulse{\\n  animation:fa-spin 1s infinite steps(8)\\n}\\n@keyframes fa-spin{\\n  0%{\\n    transform:rotate(0deg)\\n  }\\n  100%{\\n    transform:rotate(360deg)\\n  }\\n}\\n</style>\\n\\n"],"names":[],"mappings":"AAwCA,WAAW,sBAAO,CAAC,AACjB,EAAE,CAAC,AACD,UAAU,OAAO,IAAI,CAAC;EACxB,CAAC,AACD,IAAI,CAAC,AACH,UAAU,OAAO,MAAM,CAAC;EAC1B,CAAC,AACH,CAAC"}'
  };
  var Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$4);
    return `<div><h3 class="${"mb-2 text-2xl"}">Social networks</h3>

  
  
  </div>`;
  });
  var css$3 = {
    code: ".btn.svelte-1u4ik4m{box-sizing:border-box;display:inline-block;text-align:left;white-space:nowrap;text-decoration:none;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #888;padding:4px 8px;margin:1rem;border-radius:4px;color:#cfcfcf;fill:#cfcfcf;background:#303030;line-height:1em;min-width:190px;height:45px;transition:0.2s ease-out;box-shadow:0 1px 2px rgba(0,0,0,0.2);-webkit-tap-highlight-color:rgba(0,0,0,0);font-family:'bariolregular';font-weight:500;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-moz-font-feature-settings:'liga', 'kern'}.btn.svelte-1u4ik4m:hover,.btn.svelte-1u4ik4m:focus{background:#303030;color:#cfcfcf;fill:#cfcfcf;border-color:#cfcfcf;transform:scale(1.01) translate3d(0, -1px, 0);box-shadow:0 4px 8px rgba(30,30,30,30.2)}.btn.svelte-1u4ik4m:active{outline:0;background:#303030;transition:none}.btn__icon.svelte-1u4ik4m,.btn__title.svelte-1u4ik4m,.btn__desc.svelte-1u4ik4m{display:inline-block;vertical-align:top}.btn__icon.svelte-1u4ik4m{font-size:30px;width:30px;height:30px;margin-right:5px;margin-top:2px}.btn__title.svelte-1u4ik4m{letter-spacing:0.08em;margin-top:-0.1em;font-size:10px}.btn__desc.svelte-1u4ik4m{display:block;margin-left:38px;margin-top:-17px;font-size:22px;letter-spacing:-0.03em}",
    map: `{"version":3,"file":"ButtonZoom.svelte","sources":["ButtonZoom.svelte"],"sourcesContent":["<script>\\n<\/script>\\n<a class=\\"{'{{css}}'} btn btn--{'{{slug}}'}\\" href=\\"{'{{url}}'}\\">\\n    <i class=\\"btn__icon {'{{icon}}'}\\"></i>\\n    <span class=\\"btn__title\\">{'{{title}}'}</span>\\n    <span class=\\"btn__desc\\">{'{{desc}}'}</span>\\n  </a>\\n<style>\\n \\n \\n\\n .btn {\\n  box-sizing: border-box;\\n  display: inline-block;\\n  text-align: left;\\n  white-space: nowrap;\\n  text-decoration: none;\\n  vertical-align: middle;\\n  touch-action: manipulation;\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  border: 1px solid #888;\\n  padding: 4px 8px;\\n  margin: 1rem;\\n  border-radius: 4px;\\n  color: #cfcfcf;\\n  fill: #cfcfcf;\\n  background: #303030;\\n  line-height: 1em;\\n  min-width: 190px;\\n  height: 45px;\\n  transition: 0.2s ease-out;\\n  box-shadow: 0 1px 2px rgba(0,0,0,0.2);\\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\\n  font-family: 'bariolregular';\\n  font-weight: 500;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  -moz-font-feature-settings: 'liga', 'kern';\\n}\\n.btn:hover,\\n.btn:focus {\\n  background: #303030;\\n  color: #cfcfcf;\\n  fill: #cfcfcf;\\n  border-color: #cfcfcf;\\n  transform: scale(1.01) translate3d(0, -1px, 0);\\n  box-shadow: 0 4px 8px rgba(30,30,30,30.2);\\n}\\n.btn:active {\\n  outline: 0;\\n  background: #303030;\\n  transition: none;\\n}\\n.btn__icon,\\n.btn__title,\\n.btn__desc {\\n  display: inline-block;\\n  vertical-align: top;\\n}\\n.btn__icon {\\n  font-size: 30px;\\n  width: 30px;\\n  height: 30px;\\n  margin-right: 5px;\\n  margin-top: 2px;\\n}\\n.btn__title {\\n  letter-spacing: 0.08em;\\n  margin-top: -0.1em;\\n  font-size: 10px;\\n}\\n.btn__desc {\\n  display: block;\\n  margin-left: 38px;\\n  margin-top: -17px;\\n  font-size: 22px;\\n  letter-spacing: -0.03em;\\n}\\n\\n</style>\\n"],"names":[],"mappings":"AAWC,IAAI,eAAC,CAAC,AACL,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,YAAY,CACrB,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,IAAI,CACrB,cAAc,CAAE,MAAM,CACtB,YAAY,CAAE,YAAY,CAC1B,MAAM,CAAE,OAAO,CACf,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IAAI,CACtB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,OAAO,CACd,IAAI,CAAE,OAAO,CACb,UAAU,CAAE,OAAO,CACnB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAAC,QAAQ,CACzB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,2BAA2B,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC1C,WAAW,CAAE,eAAe,CAC5B,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,uBAAuB,CAAE,SAAS,CAClC,0BAA0B,CAAE,MAAM,CAAC,CAAC,MAAM,AAC5C,CAAC,AACD,mBAAI,MAAM,CACV,mBAAI,MAAM,AAAC,CAAC,AACV,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,OAAO,CACd,IAAI,CAAE,OAAO,CACb,YAAY,CAAE,OAAO,CACrB,SAAS,CAAE,MAAM,IAAI,CAAC,CAAC,YAAY,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAC9C,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,IAAI,CAAC,AAC3C,CAAC,AACD,mBAAI,OAAO,AAAC,CAAC,AACX,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE,IAAI,AAClB,CAAC,AACD,yBAAU,CACV,0BAAW,CACX,UAAU,eAAC,CAAC,AACV,OAAO,CAAE,YAAY,CACrB,cAAc,CAAE,GAAG,AACrB,CAAC,AACD,UAAU,eAAC,CAAC,AACV,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,GAAG,CACjB,UAAU,CAAE,GAAG,AACjB,CAAC,AACD,WAAW,eAAC,CAAC,AACX,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,AACjB,CAAC,AACD,UAAU,eAAC,CAAC,AACV,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,OAAO,AACzB,CAAC"}`
  };
  var ButtonZoom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$3);
    return `<a class="${escape("{{css}}") + " btn btn--" + escape("{{slug}}") + " svelte-1u4ik4m"}"${add_attribute("href", "{{url}}", 0)}><i class="${"btn__icon " + escape("{{icon}}") + " svelte-1u4ik4m"}"></i>
    <span class="${"btn__title svelte-1u4ik4m"}">${escape("{{title}}")}</span>
    <span class="${"btn__desc svelte-1u4ik4m"}">${escape("{{desc}}")}</span>
  </a>`;
  });
  var Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `${$$result.head += `<script async custom-element="${"amp-lightbox"}" src="${"https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"}" data-svelte="svelte-xjvgl7"><\/script>${$$result.title = `<title>Download ParallelCoin wallet - Plan 9 from Cryptospace</title>`, ""}<link rel="${"canonical"}" href="${"https://download.parallelcoin.info/"}" data-svelte="svelte-xjvgl7">`, ""}  
    
          
        <!-- HTML_TAG_START -->${'<amp-state id="downloads" src="https://api.parallelcoin.io/downloads"></amp-state>'}<!-- HTML_TAG_END -->

        <div class="${"flex flex-col text-center text-light md:container md:mx-auto md:px-0"}">${validate_component(HeadTitle, "HeadTitle").$$render($$result, {}, {}, { default: () => `Download ParallelCoin` })}
  
    

  <h2 class="${"text-3xl text-center"}">ParallelCoin wallet application</h2>

  <amp-list layout="${"fixed-height"}" width="${"auto"}" height="${"300"}" src="${"amp-state:downloads"}" reset-on-refresh items="${"."}" binding="${"no"}"><template type="${"amp-mustache"}">${escape("{{^legacy}}")}  
${validate_component(ButtonZoom, "ButtonZoom").$$render($$result, {}, {}, {})}
${escape("{{/legacy}}")}</template></amp-list>

<h3 class="${"text-2xl text-center"}">ParallelCoin legacy wallet application</h3>

<amp-list layout="${"responsive"}" width="${"600"}" height="${"300"}" src="${"amp-state:downloads"}" reset-on-refresh items="${"."}" binding="${"no"}"><template type="${"amp-mustache"}">${escape("{{#legacy}}")}  
  ${validate_component(ButtonZoom, "ButtonZoom").$$render($$result, {}, {}, {})}
${escape("{{/legacy}}")}</template></amp-list></div>`;
  });
  var Where = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `${$$result.head += `${$$result.title = `<title>Where is ParallelCoin? - Plan 9 from Cryptospace</title>`, ""}<link rel="${"canonical"}" href="${"https://where.parallelcoin.info/"}" data-svelte="svelte-cosxq8">`, ""}
<div class="${"flex flex-col text-center md:container md:mx-auto md:px-0"}">${validate_component(HeadTitle, "HeadTitle").$$render($$result, {}, {}, {
      default: () => `Where is ParallelCoin???`
    })}
        <div class="${"my-24 px-8 worp"}"><amp-list layout="${"fixed-height"}" width="${"auto"}" height="${"900"}" src="${"https://api.parallelcoin.io/subs"}" reset-on-refresh items="${"."}" binding="${"no"}"><template type="${"amp-mustache"}"><a class="${"flex flex-row justify-center my-4 text-2xl no-underline text-light"}" href="${escape("https://{{ slug }}") + ".parallelcoin.info"}"><div class="${"character"}">${escape(`{{ title }}`)}</div>
            <div class="${"flex-grow hidden mx-1 mb-2 border-b-2 border-dotted md:flex"}"></div>
            <div class="${"hidden md:flex"}">${escape(`{{ slug }}`)}.parallelcoin.info</div></a></template></amp-list></div>
        <p class="${"worp"}">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</p>
             <amp-img alt="${"ParallelCoin - Plan 9 from Crypto-Space - Ruler"}" src="${"https://s.okno.rs/parallelcoin/img/rulerdesk.png"}" width="${"500"}" height="${"332"}" layout="${"responsive"}" class="${"self-center w-64 rulerdesk worp"}"></amp-img></div>`;
  });
  var css$2 = {
    code: `div.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,span.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,h1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,h2.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,h3.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,p.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,a.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,small.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,ul.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,li.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,article.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,footer.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,header.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,nav.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,section.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,footer.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,header.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,nav.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,section.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{display:block}ul.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{list-style:none}.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:before,.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.container.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{margin-left:auto;margin-right:auto;width:92%}.row.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{border-bottom:solid 1px transparent}.row.svelte-vnjlay>.svelte-vnjlay.svelte-vnjlay{float:left}.row.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:after,.row.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:before{content:'';display:block;clear:both;height:0}.row.svelte-vnjlay>.svelte-vnjlay.svelte-vnjlay{padding:40px 0 0 40px}.row.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{margin:-40px 0 -1px -40px}.d12u.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{width:100%;clear:none;margin-left:0}.d8u.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{width:66.6666666667%;clear:none;margin-left:0}.d6u.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{width:50%;clear:none;margin-left:0}.d4u.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{width:33.3333333333%;clear:none;margin-left:0}:root{--blue:#3030cf;--light-blue:#30cfcf;--green:#30cf30;--orange:#ff7500;--yellow:#ffd500;--red:#cf3030;--purple:#cf30cf;--black:#303030;--white:#fcfcfc;--dark-gray:#4d4d4d;--gray:#808080;--light-gray:#c0c0c0;--base:#cfcfcf;--light:#c3c3c3;--lighter:#f3f3f3;--border-light:rgba(255, 255, 255, .62);--border-dark:rgba(0,0,0, .38);--trans-light:rgba(255, 255, 255, .24);--trans-dark:rgba(0,0,0, .62);--trans-gray:rgba(48,48,48, .38)}a.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,a.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:visited{color:#888;text-decoration:none;-moz-transition:color .2s ease-in-out;-webkit-transition:color .2s ease-in-out;-o-transition:color .2s ease-in-out;-ms-transition:color .2s ease-in-out;transition:color .2s ease-in-out}h1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,h2.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,h3.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{color:#3e3e3e}h2.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,h3.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{font-weight:700}h1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{font-weight:300}hr.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{border:0;border-top:solid 1px #444;border-top-color:rgba(0,0,0,0.35);box-shadow:0px 1px 0px 0px rgba(255,255,255,0.1);height:1px;margin:3em 0 4em 0}p.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,ul.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{margin-bottom:2em}section.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,article.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{margin-bottom:3em}section.svelte-vnjlay>.svelte-vnjlay.svelte-vnjlay:last-child,article.svelte-vnjlay>.svelte-vnjlay.svelte-vnjlay:last-child{margin-bottom:0}section.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:last-child,article.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:last-child{margin-bottom:0}.image.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{display:inline-block;position:relative}.image.fit.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{display:block;width:100%}.button.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{-webkit-appearance:none;position:relative;display:inline-block;color:#fff ;text-decoration:none;font-weight:700;border:0;outline:0;cursor:pointer;border-radius:8px;text-shadow:-1px -1px 0.5px rgba(48,48,48,0.5);overflow:hidden;box-shadow:inset 0px 0px 0px 1px rgba(48,48,48,0.5), inset 0px 2px 1px 0px rgba(207,207,207,0.75);background:var(--black);background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-moz-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-webkit-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-o-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-ms-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));-moz-transition:background-color .2s ease-in-out;-webkit-transition:background-color .2s ease-in-out;-o-transition:background-color .2s ease-in-out;-ms-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}.button.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:hover{background-color:#101010;color:#fff }.button.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:active{background-color:#505050;top:1px}ul.social.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{cursor:default;margin:0}ul.social.svelte-vnjlay li.svelte-vnjlay.svelte-vnjlay{position:relative;display:inline-block;margin:0.25em;top:0}ul.social.svelte-vnjlay li.svelte-vnjlay a.svelte-vnjlay{display:block;width:48px;height:48px;border-radius:6px;top:0;position:relative;-moz-transition:top .2s ease-in-out;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;-ms-transition:top .2s ease-in-out;transition:top .2s ease-in-out}ul.social.svelte-vnjlay li.svelte-vnjlay a.svelte-vnjlay:before{background-color:var(--black);background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-moz-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-webkit-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-o-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-ms-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));border-radius:6px;box-shadow:inset 0px 0px 0px 1px var(--black), inset 0px 2px 1px 0px rgba(207,207,207,0.1);color:var(--dark-gray) ;display:block;font-size:26px;height:48px;line-height:48px;text-align:center;outline:0;overflow:hidden;text-shadow:1px 1px 0px rgba(255,255,255,0.1);width:48px;-moz-transition:background-color .2s ease-in-out;-webkit-transition:background-color .2s ease-in-out;-o-transition:background-color .2s ease-in-out;-ms-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}ul.social.svelte-vnjlay li a.fa-twitter.svelte-vnjlay.svelte-vnjlay{background-color:#2DAAE4}ul.social.svelte-vnjlay li a.fa-facebook.svelte-vnjlay.svelte-vnjlay{background-color:#3C5A98}ul.social.svelte-vnjlay li.svelte-vnjlay a.svelte-vnjlay:hover{top:-5px}ul.social.svelte-vnjlay li.svelte-vnjlay a.svelte-vnjlay:hover:before{background-color:transparent}.box.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{background:#fff;box-shadow:inset 0px 0px 0px 1px rgba(0,0,0,0.15), 0px 2px 3px 0px rgba(0,0,0,0.1);text-align:center}.icon.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{text-decoration:none}.icon.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:before{display:inline-block;font-family:FontAwesome;font-size:1.25em;text-decoration:none;font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon.svelte-vnjlay>.label.svelte-vnjlay.svelte-vnjlay{display:none}.icon.featured.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{color:#2f2f2f;display:block;margin:0 0 1.5em 0;cursor:default}.icon.featured.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay:before{font-size:6em}.wrapper.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{background-image:url(https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png);box-shadow:inset 0px 1px 0px 0px rgba(0,0,0,0.05), inset 0px 2px 3px 0px rgba(0,0,0,0.1)}.wrapper.first.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{box-shadow:none}.wrapper.style0.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{background-image:none;background-color:#fff}.wrapper.style1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{background-image:none;background-color:#cfcfcf}.wrapper.style1.svelte-vnjlay h1.svelte-vnjlay.svelte-vnjlay,.wrapper.style1.svelte-vnjlay p.svelte-vnjlay.svelte-vnjlay,.wrapper.style1.svelte-vnjlay li.svelte-vnjlay.svelte-vnjlay{color:#303030}.wrapper.style2.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{background-color:#fafafa;text-shadow:1px 1px 0px #fff}.wrapper.style3.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{background-color:#f4f4f4;text-shadow:1px 1px 0px #fff}.wrapper.style4.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{background-color:#303030;color:#999;text-shadow:-1px -1px 0px #181818}.wrapper.style4.svelte-vnjlay h2.svelte-vnjlay.svelte-vnjlay,.wrapper.style4.svelte-vnjlay h3.svelte-vnjlay.svelte-vnjlay{color:#fff}#nav.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{background-color:#303030;text-align:center;position:fixed;left:0;top:0;width:100%;z-index:10000;cursor:default}#nav.svelte-vnjlay ul.svelte-vnjlay.svelte-vnjlay{margin-bottom:0}#nav.svelte-vnjlay li.svelte-vnjlay.svelte-vnjlay{display:inline-block}#nav.svelte-vnjlay a.svelte-vnjlay.svelte-vnjlay{position:relative;display:block;color:#fff;text-decoration:none;outline:0}#nav.svelte-vnjlay a.svelte-vnjlay.svelte-vnjlay:hover{color:#fff }#top.svelte-vnjlay .image.svelte-vnjlay.svelte-vnjlay{border-radius:50%}#top.svelte-vnjlay p.svelte-vnjlay a.svelte-vnjlay{color:inherit}#copyright.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{color:#666}#copyright.svelte-vnjlay a.svelte-vnjlay.svelte-vnjlay{color:inherit;-moz-transition:color .2s ease-in-out;-webkit-transition:color .2s ease-in-out;-o-transition:color .2s ease-in-out;-ms-transition:color .2s ease-in-out;transition:color .2s ease-in-out}#copyright.svelte-vnjlay a.svelte-vnjlay.svelte-vnjlay:hover{color:#777}.box.svelte-vnjlay p.svelte-vnjlay.svelte-vnjlay{margin:0}h1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{font-size:3.25em;letter-spacing:-0.025em}h2.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{font-size:2em;letter-spacing:-0.015em}h3.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{font-size:1.5em;letter-spacing:-0.015em}h1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,h2.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,h3.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{margin:0 0 0.75em 0;font-family:"IBM Plex Mono"}header.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{margin:0 0 3em 0}header.svelte-vnjlay>p.svelte-vnjlay.svelte-vnjlay{font-size:1.25em;margin:0}footer.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{margin:3em 0 0 0}footer.svelte-vnjlay>p.svelte-vnjlay.svelte-vnjlay{font-size:1.25em}.button.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{padding:1em 2.35em 1em 2.35em;font-size:1.1em}.button.big.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{font-size:1.5em;letter-spacing:-0.025em}.box.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{padding:2em}.box.style1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{padding:3em 2em 3.5em 2em}.box.style1.svelte-vnjlay h3.svelte-vnjlay.svelte-vnjlay{margin-bottom:0.5em}.box.style2.svelte-vnjlay h3.svelte-vnjlay.svelte-vnjlay{margin-bottom:0.25em}.wrapper.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{padding:8em 0 8em 0;text-align:center}.wrapper.first.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{padding-top:12em}#nav.svelte-vnjlay a.svelte-vnjlay.svelte-vnjlay:hover{background:#383838}#nav.svelte-vnjlay a.svelte-vnjlay.svelte-vnjlay:active{background:#484848}#nav.svelte-vnjlay a.svelte-vnjlay.svelte-vnjlay{padding:0.2em 1em 0.2em 1em;margin:0.6em 0.2em 0.6em 0.2em;font-weight:600;border-radius:8px;-moz-transition:background-color .2s ease-in-out;-webkit-transition:background-color .2s ease-in-out;-o-transition:background-color .2s ease-in-out;-ms-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out;color:#fff}#top.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{text-align:left}#top.svelte-vnjlay .image.svelte-vnjlay.svelte-vnjlay{text-align:center;margin:0}h1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{margin-top:0.35em;line-height:4rem}#top.svelte-vnjlay p.svelte-vnjlay.svelte-vnjlay{font-size:1.5em;line-height:1.75em}#contact.svelte-vnjlay footer.svelte-vnjlay.svelte-vnjlay{font-size:0.9em}#copyright.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{font-size:1em;line-height:1em}#copyright.svelte-vnjlay li.svelte-vnjlay.svelte-vnjlay{display:inline-block;border-left:solid 1px rgba(0,0,0,0.5);box-shadow:-1px 0px 0px 0px rgba(255,255,255,0.1);padding:0 0 0 1em;margin:0 0 0 1em}#copyright.svelte-vnjlay li.svelte-vnjlay.svelte-vnjlay:first-child{border:0;box-shadow:none;padding-left:0;margin-left:0}@keyframes svelte-vnjlay-teaseranim{0%{opacity:1}90%{opacity:1}99.99%{left:0}100%{display:block;opacity:0;left:-100%}}@media only screen and (max-width: 600px){h1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{font-size:2.75em;letter-spacing:0}.d12u.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,.d8u.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,.d6u.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay,.d4u.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{width:100%;clear:none;margin-left:0}#top.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{text-align:center}}.shp0.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{fill:#303030}.shp1.svelte-vnjlay.svelte-vnjlay.svelte-vnjlay{fill:#cfcfcf}`,
    map: `{"version":3,"file":"Legacy.svelte","sources":["Legacy.svelte"],"sourcesContent":["<script>\\n<\/script>\\n\\n\\n\\n<style amp-custom>\\n\\n\\n    /* Resets (http://meyerweb.com/eric/tools/css/reset/ | v2.0 | 20110126 | License: none (public domain)) */\\n\\n    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}body{-webkit-text-size-adjust:none}\\n\\n    /* Box Model */\\n\\n    *, *:before, *:after {\\n        -moz-box-sizing: border-box;\\n        -webkit-box-sizing: border-box;\\n        box-sizing: border-box;\\n    }\\n\\n    /* Container */\\n\\n    .container {\\n        margin-left: auto;\\n        margin-right: auto;\\n\\n        /* width: (containers) */\\n        width: 92%;\\n    }\\n\\n    /* Modifiers */\\n\\n\\n\\n    /* Grid */\\n\\n    .row {\\n        border-bottom: solid 1px transparent;\\n    }\\n\\n    .row > * {\\n        float: left;\\n    }\\n\\n    .row:after, .row:before {\\n        content: '';\\n        display: block;\\n        clear: both;\\n        height: 0;\\n    }\\n\\n    .row.uniform > * > :first-child {\\n        margin-top: 0;\\n    }\\n\\n    .row.uniform > * > :last-child {\\n        margin-bottom: 0;\\n    }\\n\\n    /* Gutters */\\n\\n    /* Normal */\\n\\n    .row > * {\\n        /* padding: (gutters.horizontal) 0 0 (gutters.vertical) */\\n        padding: 40px 0 0 40px;\\n    }\\n\\n    .row {\\n        /* margin: -(gutters.horizontal) 0 -1px -(gutters.vertical) */\\n        margin: -40px 0 -1px -40px;\\n    }\\n\\n    .row.uniform > * {\\n        /* padding: (gutters.vertical) 0 0 (gutters.vertical) */\\n        padding: 40px 0 0 40px;\\n    }\\n\\n    .row.uniform {\\n        /* margin: -(gutters.vertical) 0 -1px -(gutters.vertical) */\\n        margin: -40px 0 -1px -40px;\\n    }\\n\\n\\n    /* Cells */\\n\\n    .d12u { width: 100%; clear: none; margin-left: 0; }\\n    .d11u { width: 91.6666666667%; clear: none; margin-left: 0; }\\n    .d10u { width: 83.3333333333%; clear: none; margin-left: 0; }\\n    .d9u { width: 75%; clear: none; margin-left: 0; }\\n    .d8u { width: 66.6666666667%; clear: none; margin-left: 0; }\\n    .d7u { width: 58.3333333333%; clear: none; margin-left: 0; }\\n    .d6u { width: 50%; clear: none; margin-left: 0; }\\n    .d5u { width: 41.6666666667%; clear: none; margin-left: 0; }\\n    .d4u { width: 33.3333333333%; clear: none; margin-left: 0; }\\n    .d3u { width: 25%; clear: none; margin-left: 0; }\\n    .d2u { width: 16.6666666667%; clear: none; margin-left: 0; }\\n    .d1u { width: 8.3333333333%; clear: none; margin-left: 0; }\\n\\n\\n\\n\\n\\n\\n\\n\\n    :root {\\n        --blue: #3030cf;\\n        --light-blue: #30cfcf;\\n\\n        --green: #30cf30;\\n        --orange: #ff7500;\\n        --yellow: #ffd500;\\n        --red: #cf3030;\\n        --purple: #cf30cf;\\n\\n        --black: #303030;\\n        --white: #fcfcfc;\\n\\n        --dark-gray:#4d4d4d;\\n        --gray:#808080;\\n        --light-gray:#c0c0c0;\\n\\n        --base:#cfcfcf;\\n        --light:#c3c3c3;\\n        --lighter: #f3f3f3;\\n\\n\\n        --border-light: rgba(255, 255, 255, .62);\\n        --border-dark: rgba(0,0,0, .38);\\n\\n        --trans-light: rgba(255, 255, 255, .24);\\n        --trans-dark: rgba(0,0,0, .62);\\n        --trans-gray: rgba(48,48,48, .38);\\n\\n\\n    }\\n\\n\\n\\n    /*\\n      Miniport by HTML5 UP\\n      html5up.net | @n33co\\n      Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)\\n    */\\n\\n    /*********************************************************************************/\\n    /* Basic                                                                         */\\n    /*********************************************************************************/\\n\\n    body,input,textarea,select\\n    {\\n        font-family: 'Open Sans', sans-serif;\\n        line-height: 1.85em;\\n        color: #888;\\n        font-weight: 300;\\n    }\\n\\n    body.is-loading *\\n    {\\n        -moz-transition: none ;\\n        -webkit-transition: none ;\\n        -o-transition: none ;\\n        -ms-transition: none ;\\n        transition: none ;\\n        -moz-animation: none ;\\n        -webkit-animation: none ;\\n        -o-animation: none ;\\n        -ms-animation: none ;\\n        animation: none ;\\n    }\\n    body{\\n\\n        background-image: url(https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/main.webp);\\n        background-position: center center;\\n        background-repeat: no-repeat;\\n        background-size: cover;\\n        background-attachment: fixed;\\n    }\\n    a, a:visited\\n    {\\n        color: #888;\\n        text-decoration: none;\\n        -moz-transition: color .2s ease-in-out;\\n        -webkit-transition: color .2s ease-in-out;\\n        -o-transition: color .2s ease-in-out;\\n        -ms-transition: color .2s ease-in-out;\\n        transition: color .2s ease-in-out;\\n    }\\n\\n    a:hover\\n    {\\n\\n    }\\n\\n    a img\\n    {\\n        border: 0;\\n    }\\n\\n    b, strong\\n    {\\n        font-weight: 600;\\n        color: #3e3e3e;\\n    }\\n\\n    i, em\\n    {\\n        font-style: italic;\\n    }\\n\\n    sub\\n    {\\n        position: relative;\\n        top: 0.5em;\\n        font-size: 0.8em;\\n    }\\n\\n    sup\\n    {\\n        position: relative;\\n        top: -0.5em;\\n        font-size: 0.8em;\\n    }\\n\\n    blockquote\\n    {\\n        border-left: solid 0.75em #eee;\\n        padding: 1em 0 1em 1.5em;\\n        font-style: italic;\\n    }\\n\\n    h1, h2, h3, h4, h5, h6\\n    {\\n        color: #3e3e3e;\\n    }\\n\\n    h1 a, h2 a, h3 a, h4 a, h5 a, h6 a\\n    {\\n        text-decoration: none;\\n        color: inherit;\\n    }\\n\\n    h2, h3, h4, h5, h6\\n    {\\n        font-weight: 700;\\n    }\\n\\n    h1\\n    {\\n        font-weight: 300;\\n    }\\n\\n    h1 strong\\n    {\\n        font-weight: 700;\\n    }\\n\\n    em, i\\n    {\\n        font-style: italic;\\n    }\\n\\n    br.clear\\n    {\\n        clear: both;\\n    }\\n\\n    hr\\n    {\\n        border: 0;\\n        border-top: solid 1px #444;\\n        border-top-color: rgba(0,0,0,0.35);\\n        box-shadow: 0px 1px 0px 0px rgba(255,255,255,0.1);\\n        height: 1px;\\n        margin: 3em 0 4em 0;\\n    }\\n\\n    p, ul, ol, dl, table\\n    {\\n        margin-bottom: 2em;\\n    }\\n\\n    /* Form */\\n\\n    form\\n    {\\n    }\\n\\n    form label\\n    {\\n        color: #3e3e3e;\\n        font-weight: 700;\\n        display: block;\\n        margin: 0 0 0.5em 0;\\n    }\\n\\n    form input[type=text],\\n    form input[type=email],\\n    form input[type=password],\\n    form select,\\n    form textarea\\n    {\\n        -webkit-appearance: none;\\n        display: block;\\n        border: 0;\\n        padding: 0.75em;\\n        font-size: 1em;\\n        border-radius: 8px;\\n        border: solid 1px #ddd;\\n        background: #fff;\\n        color: #bbb;\\n        box-shadow: inset 0px 2px 3px 1px rgba(0,0,0,0.05), 0px 1px 0px 0px rgba(255,255,255,0.025);\\n        width: 100%;\\n        -moz-transition: background .2s ease-in-out, box-shadow .2s ease-in-out;\\n        -webkit-transition: background .2s ease-in-out, box-shadow .2s ease-in-out;\\n        -o-transition: background .2s ease-in-out, box-shadow .2s ease-in-out;\\n        -ms-transition: background .2s ease-in-out, box-shadow .2s ease-in-out;\\n        transition: background .2s ease-in-out, box-shadow .2s ease-in-out;\\n    }\\n\\n    form input[type=text]:focus,\\n    form input[type=email]:focus,\\n    form input[type=password]:focus,\\n    form select:focus,\\n    form textarea:focus\\n    {\\n        background: #fafafa;\\n        box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.05), 0px 1px 0px 0px rgba(255,255,255,0.025), inset 0px 0px 2px 1px #43bff0;\\n    }\\n\\n    form textarea\\n    {\\n        height: 15em;\\n    }\\n\\n    form .formerize-placeholder\\n    {\\n        color: #555 ;\\n    }\\n\\n    form ::-webkit-input-placeholder\\n    {\\n        color: #555 ;\\n    }\\n\\n    form :-moz-placeholder\\n    {\\n        color: #555 ;\\n    }\\n\\n    form ::-moz-placeholder\\n    {\\n        color: #555 ;\\n    }\\n\\n    form :-ms-input-placeholder\\n    {\\n        color: #555 ;\\n    }\\n\\n    form ::-moz-focus-inner\\n    {\\n        border: 0;\\n    }\\n\\n    /* Tables */\\n\\n    table\\n    {\\n        width: 100%;\\n    }\\n\\n    table.default\\n    {\\n        width: 100%;\\n    }\\n\\n    table.default tr\\n    {\\n        border-top: solid 1px #eee;\\n    }\\n\\n    table.default tr:first-child\\n    {\\n        border-top: 0;\\n    }\\n\\n    table.default td\\n    {\\n        padding: 0.5em 1em 0.5em 1em;\\n    }\\n\\n    table.default th\\n    {\\n        text-align: left;\\n        padding: 0.5em 1em 0.5em 1em;\\n        font-weight: 600;\\n        margin: 0 0 1em 0;\\n    }\\n\\n    table.default thead\\n    {\\n        background: #4f4f4f;\\n        color: #fff;\\n    }\\n\\n    table.default tfoot\\n    {\\n    }\\n\\n    table.default tbody\\n    {\\n    }\\n\\n    /* Section/Article */\\n\\n    section,\\n    article\\n    {\\n        margin-bottom: 3em;\\n    }\\n\\n    section > :last-child,\\n    article > :last-child\\n    {\\n        margin-bottom: 0;\\n    }\\n\\n    section:last-child,\\n    article:last-child\\n    {\\n        margin-bottom: 0;\\n    }\\n\\n    /* Image */\\n\\n    .image\\n    {\\n        display: inline-block;\\n        position: relative;\\n    }\\n\\n    .image img\\n    {\\n        display: block;\\n        width: 100%;\\n    }\\n\\n    .image.fit\\n    {\\n        display: block;\\n        width: 100%;\\n    }\\n\\n    .image.featured\\n    {\\n        display: block;\\n        width: 100%;\\n        margin: 0 0 2em 0;\\n    }\\n\\n    .image.left\\n    {\\n        float: left;\\n        margin: 0 2em 2em 0;\\n    }\\n\\n    .image.centered\\n    {\\n        display: block;\\n        margin: 0 0 2em 0;\\n    }\\n\\n    .image.centered img\\n    {\\n        margin: 0 auto;\\n        width: auto;\\n    }\\n\\n    /* Button */\\n\\n    input[type=\\"button\\"],\\n    input[type=\\"submit\\"],\\n    input[type=\\"reset\\"],\\n    .button\\n    {\\n        -webkit-appearance: none;\\n        position: relative;\\n        display: inline-block;\\n        color: #fff ;\\n        text-decoration: none;\\n        font-weight: 700;\\n        border: 0;\\n        outline: 0;\\n        cursor: pointer;\\n        border-radius: 8px;\\n        text-shadow: -1px -1px 0.5px rgba(48,48,48,0.5);\\n        overflow: hidden;\\n        box-shadow: inset 0px 0px 0px 1px rgba(48,48,48,0.5), inset 0px 2px 1px 0px rgba(207,207,207,0.75);\\n        background: var(--black);\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-moz-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-webkit-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-o-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-ms-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        -moz-transition: background-color .2s ease-in-out;\\n        -webkit-transition: background-color .2s ease-in-out;\\n        -o-transition: background-color .2s ease-in-out;\\n        -ms-transition: background-color .2s ease-in-out;\\n        transition: background-color .2s ease-in-out;\\n    }\\n\\n    input[type=\\"button\\"]:hover,\\n    input[type=\\"submit\\"]:hover,\\n    input[type=\\"reset\\"]:hover,\\n    .button:hover\\n    {\\n        background-color: #101010;\\n        color: #fff ;\\n    }\\n\\n    input[type=\\"button\\"]:active,\\n    input[type=\\"submit\\"]:active,\\n    input[type=\\"reset\\"]:active,\\n    .button:active\\n    {\\n        background-color: #505050;\\n        top: 1px;\\n    }\\n\\n    input[type=\\"button\\"].alt,\\n    input[type=\\"submit\\"].alt,\\n    input[type=\\"reset\\"].alt,\\n    .button.alt\\n    {\\n        background-color: #444;\\n        box-shadow: inset 0px 0px 0px 1px #242424, inset 0px 2px 1px 0px rgba(255,255,255,0.2);\\n    }\\n\\n    input[type=\\"button\\"].alt:hover,\\n    input[type=\\"submit\\"].alt:hover,\\n    input[type=\\"reset\\"].alt:hover,\\n    .button.alt:hover\\n    {\\n        background-color: var(--dark-gray);\\n        color: #fff ;\\n    }\\n\\n    input[type=\\"button\\"].alt:active,\\n    input[type=\\"submit\\"].alt:active,\\n    input[type=\\"reset\\"].alt:active,\\n    .button.alt:active\\n    {\\n        background-color:var(--gray);\\n    }\\n\\n    /* List */\\n\\n    ul\\n    {\\n    }\\n\\n    ul.default\\n    {\\n        list-style: disc;\\n        padding-left: 1em;\\n    }\\n\\n    ul.default li\\n    {\\n        padding-left: 0.5em;\\n    }\\n\\n    ul.social\\n    {\\n        cursor: default;\\n        margin: 0;\\n    }\\n\\n    ul.social li\\n    {\\n        position: relative;\\n        display: inline-block;\\n        margin: 0.25em;\\n        top: 0;\\n    }\\n\\n    ul.social li a {\\n        display: block;\\n        width: 48px;\\n        height: 48px;\\n        border-radius: 6px;\\n        top: 0;\\n        position: relative;\\n\\n        -moz-transition: top .2s ease-in-out;\\n        -webkit-transition: top .2s ease-in-out;\\n        -o-transition: top .2s ease-in-out;\\n        -ms-transition: top .2s ease-in-out;\\n        transition: top .2s ease-in-out;\\n    }\\n\\n    ul.social li a:before {\\n        background-color: var(--black);\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-moz-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-webkit-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-o-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-ms-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));\\n        border-radius: 6px;\\n        box-shadow: inset 0px 0px 0px 1px var(--black), inset 0px 2px 1px 0px rgba(207,207,207,0.1);\\n        color: var(--dark-gray) ;\\n        display: block;\\n        font-size: 26px;\\n        height: 48px;\\n        line-height: 48px;\\n        text-align: center;\\n        outline: 0;\\n        overflow: hidden;\\n        text-shadow: 1px 1px 0px rgba(255,255,255,0.1);\\n        width: 48px;\\n\\n        -moz-transition: background-color .2s ease-in-out;\\n        -webkit-transition: background-color .2s ease-in-out;\\n        -o-transition: background-color .2s ease-in-out;\\n        -ms-transition: background-color .2s ease-in-out;\\n        transition: background-color .2s ease-in-out;\\n    }\\n\\n    ul.social li a.fa-twitter\\t\\t{ background-color: #2DAAE4; }\\n    ul.social li a.fa-facebook\\t\\t{ background-color: #3C5A98; }\\n    ul.social li a.fa-dribbble\\t\\t{ background-color: #C4376B; }\\n    ul.social li a.fa-linkedin\\t\\t{ background-color: #006599; }\\n    ul.social li a.fa-tumblr\\t\\t{ background-color: #51718A; }\\n    ul.social li a.fa-google-plus\\t{ background-color: #DA2713; }\\n    ul.social li a.fa-github\\t\\t{ background-color: #FAFAFA; }\\n    ul.social li a.fa-rss\\t\\t\\t{ background-color: #F2600B; }\\n    ul.social li a.fa-instagram\\t\\t{ background-color: #E0D7C8; }\\n    ul.social li a.fa-foursquare\\t{ background-color: #39A3D4; }\\n    ul.social li a.fa-skype\\t\\t\\t{ background-color: #10BEF1; }\\n    ul.social li a.fa-soundcloud\\t{ background-color: #FE5419; }\\n    ul.social li a.fa-youtube\\t\\t{ background-color: #BF2E25; }\\n    ul.social li a.fa-blogger\\t\\t{ background-color: #FF6501; }\\n    ul.social li a.fa-flickr\\t\\t{ background-color: #0062DB; }\\n    ul.social li a.fa-vimeo\\t\\t\\t{ background-color: #4C8AB0; }\\n\\n    ul.social li a:hover\\n    {\\n        top: -5px;\\n    }\\n\\n    ul.social li a:hover:before\\n    {\\n        background-color: transparent;\\n    }\\n\\n    ul.actions\\n    {\\n    }\\n\\n    ul.actions li\\n    {\\n        display: inline-block;\\n        margin: 0 0 0 1em;\\n    }\\n\\n    ul.actions li:first-child\\n    {\\n        margin-left: 0;\\n    }\\n\\n    ol\\n    {\\n    }\\n\\n    ol.default\\n    {\\n        list-style: decimal;\\n        padding-left: 1.25em;\\n    }\\n\\n    ol.default li\\n    {\\n        padding-left: 0.25em;\\n    }\\n\\n    /* Box */\\n\\n    .box\\n    {\\n        background: #fff;\\n        box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,0.15), 0px 2px 3px 0px rgba(0,0,0,0.1);\\n        text-align: center;\\n    }\\n\\n    /*********************************************************************************/\\n    /* Icons                                                                         */\\n    /*********************************************************************************/\\n\\n    .icon {\\n        text-decoration: none;\\n    }\\n\\n    .icon:before {\\n        display: inline-block;\\n        font-family: FontAwesome;\\n        font-size: 1.25em;\\n        text-decoration: none;\\n        font-style: normal;\\n        font-weight: normal;\\n        line-height: 1;\\n        -webkit-font-smoothing:antialiased;\\n        -moz-osx-font-smoothing:grayscale;\\n    }\\n\\n    .icon > .label {\\n        display: none;\\n    }\\n\\n    .icon.featured\\n    {\\n        color: #2f2f2f;\\n        display: block;\\n        margin: 0 0 1.5em 0;\\n        cursor: default;\\n    }\\n\\n    .icon.featured:before\\n    {\\n        font-size: 6em;\\n    }\\n\\n    /*********************************************************************************/\\n    /* Wrappers                                                                      */\\n    /*********************************************************************************/\\n\\n    .wrapper\\n    {\\n        background-image: url(https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png);\\n        box-shadow: inset 0px 1px 0px 0px rgba(0,0,0,0.05), inset 0px 2px 3px 0px rgba(0,0,0,0.1);\\n    }\\n\\n    .wrapper.first\\n    {\\n        box-shadow: none;\\n    }\\n\\n    .wrapper.style0{\\n        background-image: none;\\n        background-color: #fff;\\n\\n    }\\n\\n    .wrapper.style1\\n    {\\n        background-image: none;\\n        background-color: #cfcfcf;\\n    }\\n    .wrapper.style1 h1,.wrapper.style1 p,.wrapper.style1 li\\n    {\\n        color: #303030;\\n    }\\n\\n    .wrapper.style2\\n    {\\n        background-color: #fafafa;\\n        text-shadow: 1px 1px 0px #fff;\\n    }\\n\\n    .wrapper.style3\\n    {\\n        background-color: #f4f4f4;\\n        text-shadow: 1px 1px 0px #fff;\\n    }\\n\\n    .wrapper.style4\\n    {\\n        background-color: #303030;\\n        color: #999;\\n        text-shadow: -1px -1px 0px #181818;\\n    }\\n\\n    .wrapper.style4 h1,\\n    .wrapper.style4 h2,\\n    .wrapper.style4 h3,\\n    .wrapper.style4 h4,\\n    .wrapper.style4 h5,\\n    .wrapper.style4 h6\\n    {\\n        color: #fff;\\n    }\\n\\n    .wrapper.style4 form input[type=text],\\n    .wrapper.style4 form input[type=password],\\n    .wrapper.style4 form select,\\n    .wrapper.style4 form textarea\\n    {\\n        border: none;\\n        background: #303030;\\n    }\\n\\n    .wrapper.style4 form input[type=text]:focus,\\n    .wrapper.style4 form input[type=password]:focus,\\n    .wrapper.style4 form select:focus,\\n    .wrapper.style4 form textarea:focus\\n    {\\n        background: #252525;\\n    }\\n\\n    /*********************************************************************************/\\n    /* Nav                                                                           */\\n    /*********************************************************************************/\\n\\n    #nav\\n    {\\n        background-color: #303030;\\n        text-align: center;\\n        position: fixed;\\n        left: 0;\\n        top: 0;\\n        width: 100%;\\n        z-index: 10000;\\n        cursor: default;\\n    }\\n\\n    #nav ul\\n    {\\n        margin-bottom: 0;\\n    }\\n\\n    #nav li\\n    {\\n        display: inline-block;\\n    }\\n\\n    #nav a\\n    {\\n        position: relative;\\n        display: block;\\n        color: #fff;\\n        text-decoration: none;\\n        outline: 0;\\n    }\\n\\n    #nav a:hover\\n    {\\n        color: #fff ;\\n    }\\n\\n    #nav a.active:before\\n    {\\n        content: '';\\n        display: block;\\n        position: absolute;\\n        bottom: -0.6em;\\n        left: 50%;\\n        margin-left: -0.75em;\\n        border-left: solid 0.75em transparent;\\n        border-right: solid 0.75em transparent;\\n        border-top: solid 0.6em #303030;\\n    }\\n\\n    /*********************************************************************************/\\n    /* Articles                                                                      */\\n    /*********************************************************************************/\\n\\n    #top\\n    {\\n    }\\n\\n    #top .image\\n    {\\n        border-radius: 50%;\\n    }\\n\\n    #top .image img\\n    {\\n        border-radius: 50%;\\n    }\\n\\n    #top p\\n    {\\n    }\\n\\n    #top p a\\n    {\\n        color: inherit;\\n    }\\n\\n    /*********************************************************************************/\\n    /* Copyright                                                                     */\\n    /*********************************************************************************/\\n\\n    #copyright\\n    {\\n        color: #666;\\n    }\\n\\n    #copyright a\\n    {\\n        color: inherit;\\n\\n        -moz-transition: color .2s ease-in-out;\\n        -webkit-transition: color .2s ease-in-out;\\n        -o-transition: color .2s ease-in-out;\\n        -ms-transition: color .2s ease-in-out;\\n        transition: color .2s ease-in-out;\\n    }\\n\\n    #copyright a:hover\\n    {\\n        color: #777;\\n    }\\n\\n    .box p{\\n        margin: 0;\\n    }\\n    /*\\n      Miniport by HTML5 UP\\n      html5up.net | @n33co\\n      Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)\\n    */\\n\\n    /*********************************************************************************/\\n    /* Basic                                                                         */\\n    /*********************************************************************************/\\n\\n    body,input,textarea,select\\n    {\\n        font-size: 13pt;\\n    }\\n\\n    h1\\n    {\\n        font-size: 3.25em;\\n        letter-spacing: -0.025em;\\n    }\\n\\n    h2\\n    {\\n        font-size: 2em;\\n        letter-spacing: -0.015em;\\n    }\\n\\n    h3\\n    {\\n        font-size: 1.5em;\\n        letter-spacing: -0.015em;\\n    }\\n\\n    h1, h2, h3, h4, h5, h6\\n    {\\n        margin: 0 0 0.75em 0;\\n        font-family: \\"IBM Plex Mono\\";\\n    }\\n\\n    header\\n    {\\n        margin: 0 0 3em 0;\\n    }\\n\\n    header > p\\n    {\\n        font-size: 1.25em;\\n        margin: 0;\\n    }\\n\\n    footer\\n    {\\n        margin: 3em 0 0 0;\\n    }\\n\\n    footer > p\\n    {\\n        font-size: 1.25em;\\n    }\\n\\n    /* Form */\\n\\n    form\\n    {\\n    }\\n\\n    form .button\\n    {\\n        margin: 0 0.5em 0 0.5em;\\n    }\\n\\n    /* Button */\\n\\n    input[type=\\"button\\"],\\n    input[type=\\"submit\\"],\\n    input[type=\\"reset\\"],\\n    .button\\n    {\\n        padding: 1em 2.35em 1em 2.35em;\\n        font-size: 1.1em;\\n    }\\n\\n    input[type=\\"button\\"].big,\\n    input[type=\\"submit\\"].big,\\n    input[type=\\"reset\\"].big,\\n    .button.big\\n    {\\n        font-size: 1.5em;\\n        letter-spacing: -0.025em;\\n    }\\n\\n    /* Box */\\n\\n    .box\\n    {\\n        padding: 2em;\\n    }\\n\\n    .box.style1\\n    {\\n        padding: 3em 2em 3.5em 2em;\\n    }\\n\\n    .box.style1 h3\\n    {\\n        margin-bottom: 0.5em;\\n    }\\n\\n    .box.style2\\n    {\\n    }\\n\\n    .box.style2 h3\\n    {\\n        margin-bottom: 0.25em;\\n    }\\n\\n    .box.style2 .image\\n    {\\n        position: relative;\\n        left: 2em;\\n        top: 2em;\\n        margin: -4em 0 4em -4em;\\n        width: auto;\\n    }\\n\\n    /*********************************************************************************/\\n    /* Wrappers                                                                      */\\n    /*********************************************************************************/\\n\\n    .wrapper\\n    {\\n        padding: 8em 0 8em 0;\\n        text-align: center;\\n    }\\n\\n    .wrapper.first\\n    {\\n        padding-top: 12em;\\n    }\\n\\n    /*********************************************************************************/\\n    /* Nav                                                                           */\\n    /*********************************************************************************/\\n\\n    #nav\\n    {\\n    }\\n\\n    #nav a:hover\\n    {\\n        background: #383838;\\n    }\\n\\n    #nav a:active\\n    {\\n        background: #484848;\\n    }\\n\\n    #nav a\\n    {\\n        padding: 0.2em 1em 0.2em 1em;\\n        margin: 0.6em 0.2em 0.6em 0.2em;\\n        font-weight: 600;\\n        border-radius: 8px;\\n        -moz-transition: background-color .2s ease-in-out;\\n        -webkit-transition: background-color .2s ease-in-out;\\n        -o-transition: background-color .2s ease-in-out;\\n        -ms-transition: background-color .2s ease-in-out;\\n        transition: background-color .2s ease-in-out;\\n        color: #fff;\\n    }\\n\\n    /*********************************************************************************/\\n    /* Articles                                                                      */\\n    /*********************************************************************************/\\n\\n    #top\\n    {\\n        text-align: left;\\n    }\\n\\n    #top .image\\n    {\\n        text-align:center;\\n        margin: 0;\\n    }\\n\\n    h1\\n    {\\n        margin-top: 0.35em;\\n        line-height:4rem;\\n    }\\n\\n    #top p\\n    {\\n        font-size: 1.5em;\\n        line-height: 1.75em;\\n    }\\n\\n    #contact\\n    {\\n    }\\n\\n    #contact footer\\n    {\\n        font-size: 0.9em;\\n    }\\n\\n    /*********************************************************************************/\\n    /* Copyright                                                                     */\\n    /*********************************************************************************/\\n\\n    #copyright\\n    {\\n        font-size: 1em;\\n        line-height: 1em;\\n    }\\n\\n    #copyright li\\n    {\\n        display: inline-block;\\n        border-left: solid 1px rgba(0,0,0,0.5);\\n        box-shadow: -1px 0px 0px 0px rgba(255,255,255,0.1);\\n        padding: 0 0 0 1em;\\n        margin: 0 0 0 1em;\\n    }\\n\\n    #copyright li:first-child\\n    {\\n        border: 0;\\n        box-shadow: none;\\n        padding-left: 0;\\n        margin-left: 0;\\n    }\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n    .teaser{\\n        position:fixed;\\n        top:0;\\n        bottom:0;\\n        left:0;\\n        right:0;\\n        width: 100%;\\n        height: 100vh;\\n        background-color: #303030;\\n        overflow:hidden;\\n        line-height:1;\\n        z-index: 11111;\\n        animation-name: teaseranim;\\n        animation-duration: 5s;\\n        animation-iteration-count: 1;\\n        opacity:0;\\n        pointer-events: none;\\n    }\\n    @keyframes teaseranim {\\n        0%  {opacity:1}\\n        90%  {opacity:1}\\n        99.99% {left:0}\\n        100% {display:block;opacity:0;left:-100%}\\n    }\\n    .kggkTh {\\n        display: flex;\\n        flex-direction: column;\\n        height: 100%;\\n        color: #cfcfcf;\\n        background: url(/web/20210702081625im_/https://parallelcoin.info/assets/intro-bg-grid.svg) center 920px #303030;\\n    }\\n    .buZDsR {\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        right: 0;\\n        bottom: 0;\\n        opacity: .5;\\n        display: flex;\\n        align-items: stretch;\\n        justify-content: stretch;\\n        pointer-events: none;\\n    }\\n    .cnVHDz {\\n        flex: auto;\\n        margin: 0 -100px;\\n    }\\n    .cnVHDz>video[playsinline][class] {\\n        position: static;\\n        object-fit: cover;\\n        z-index: -1000;\\n    }\\n    .buZDsRO {\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        right: 0;\\n        bottom: 0;\\n        opacity: 1;\\n        display: flex;\\n        height: 100vh;\\n        background: linear-gradient(to bottom, rgba(48,48,48,1) 0%,rgba(48,48,48,0) 38%,rgba(48,48,48,0) 62%,rgba(48,48,48,1) 100%);\\n    }\\n    .gzDaIA {\\n        display: flex;\\n        margin: auto;\\n        position: relative;\\n        padding: 0 16px;\\n        flex-direction: column;\\n    }\\n\\n    .hAlYFz {\\n        opacity: .7;\\n        margin-bottom: 40px;\\n    }\\n\\n    .datRyl {\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n    }\\n    .dUzKEk {\\n        text-transform: uppercase;\\n        font-family: Oswald;\\n        position: -webkit-sticky;\\n        position: sticky;\\n        top: 2vh;\\n    }\\n    .dUzKEk, .gNaQIH strong {\\n        font-weight: 700;\\n    }\\n    .bqzsXD, .dENNLc, .dUzKEk, .hAlYFz, .hchilx {\\n        text-align: center;\\n    }\\n\\n    .fNmApF {\\n        position: relative;\\n        width: 100%;\\n        padding: 0 25px;\\n    }\\n\\n    .fNmApF, .jtNXQs {\\n        white-space: nowrap;\\n    }\\n    .jqSTTi {\\n        font-size: 8vh;\\n    }\\n    .hJXFGi {\\n        font-size: 16vh;\\n    }\\n\\n    .iJXdPE {\\n        font-size: 28vh;\\n    }\\n    .bgwhite{\\n        background: #CFCFCF;\\n        fill:#CFCFCF;\\n    }\\n\\n\\n\\n    @media only screen and (max-width: 600px) {\\n        h1\\n        {\\n            font-size: 2.75em;\\n            letter-spacing: 0;\\n        }\\n        .d12u, .d11u, .d10u, .d9u, .d8u, .d7u, .d6u, .d5u, .d4u, .d3u, .d2u, .d1u { width: 100%; clear: none; margin-left: 0; }\\n\\n        #top{\\n            text-align:center;\\n        }\\n        .jqSTTi {\\n            font-size: 5vh;\\n        }\\n        .hJXFGi {\\n            font-size: 12vh;\\n        }\\n        .iJXdPE {\\n            font-size: 15vh;\\n        }\\n\\n    }\\n\\n\\n    tspan{white-space:pre}\\n    .shp0{fill:#303030}\\n    .shp1{fill:#cfcfcf}\\n</style>\\n\\n<svelte:head>\\n  <script async custom-element=\\"amp-video\\" src=\\"https://cdn.ampproject.org/v0/amp-video-0.1.js\\"><\/script>  \\n  <script async custom-element=\\"amp-twitter\\" src=\\"https://cdn.ampproject.org/v0/amp-twitter-0.1.js\\"><\/script>\\n  <script async custom-element=\\"amp-facebook-page\\" src=\\"https://cdn.ampproject.org/v0/amp-facebook-page-0.1.js\\"><\/script>  \\n\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.googleapis.com\\">\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.gstatic.com\\" crossorigin>\\n  <link href=\\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Open+Sans:wght@300;600;700&family=Oswald:wght@300;700&display=swap\\" rel=\\"stylesheet\\">\\n\\n  \\n     <title>ParallelCoin Legacy - Plan 9 from Cryptospace</title>\\n     <link rel=\\"canonical\\" href=\\"https://legacy.parallelcoin.info/\\">\\n  </svelte:head>\\n\\n<div class=\\"scs\\">\\n<!-- Nav -->\\n<nav id=\\"nav\\">\\n  <ul class=\\"container\\">\\n    <li><a href=\\"#top\\">Top</a></li>\\n    <li><a href=\\"#specs\\">Specifications</a></li>\\n    <li><a href=\\"#work\\">Downloads</a></li>\\n    <li><a href=\\"#portfolio\\">Resources</a></li>\\n    <li><a href=\\"#contact\\">Contact</a></li>\\n  </ul>\\n</nav>\\n\\n<!-- Home -->\\n<div class=\\"wrapper style0 first\\">\\n  <article class=\\"container\\" id=\\"top\\">\\n    <div class=\\"row\\">\\n      <div class=\\"d4u\\">\\n                        <span class=\\"image fit\\">\\n                        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewbox=\\"0 0 1024 1024\\" width=\\"256\\" height=\\"256\\">\\n<path class=\\"shp0\\" d=\\"M512,0c-282.88,0 -512,229.12 -512,512c0,282.88 229.12,512 512,512c282.88,0 512,-229.12 512,-512c0,-282.88 -229.12,-512 -512,-512z\\"/>\\n<path class=\\"shp1\\" d=\\"M634.88,198.42c19.2,5.12 34.56,12.79 51.2,23.03c29.44,19.2 52.48,42.25 70.4,72.97c19.2,30.72 26.88,65.28 26.88,102.4c0,35.84 -8.96,70.38 -26.87,101.1c-17.92,32 -40.96,56.33 -70.4,74.25c-16.64,10.24 -34.56,19.21 -51.2,24.33c-19.2,5.12 -38.4,7.68 -57.6,7.68v-71.68c34.56,-1.28 66.57,-12.8 94.72,-39.68c28.16,-26.88 42.23,-58.9 42.23,-97.3c0,-38.4 -12.79,-70.4 -39.67,-97.28c-26.88,-26.88 -58.87,-39.68 -97.27,-39.68c-38.4,0 -71.68,12.8 -97.27,39.68c-26.88,26.88 -39.7,58.88 -39.7,97.28v426.25c-15.36,-15.36 -39.66,-38.41 -69.1,-67.85v-358.4c0,-19.2 2.56,-38.38 7.68,-56.3c5.12,-19.2 12.78,-35.84 23.02,-51.2c19.2,-29.44 42.26,-52.5 72.98,-71.7c30.72,-17.92 65.28,-25.6 102.4,-25.6c19.2,0 39.68,2.58 57.6,7.7zM641.28,395.52c0,35.84 -29.43,65.3 -65.27,65.3c-37.12,1.28 -65.3,-28.18 -65.3,-65.3c0,-35.84 29.46,-65.28 65.3,-65.28c35.84,0 65.27,29.44 65.27,65.28zM320.01,369.92v344.32c-30.72,-30.72 -55.05,-53.76 -69.12,-69.12v-275.2z\\"/>\\n</svg>\\n\\n\\n</span>\\n      </div>\\n      <div class=\\"d8u\\">\\n        <header>\\n          <h1>What is ParallelCoin?</h1>\\n        </header>\\n        <p>ParallelCoin is an new digital currency that enables instant payments to anyone, anywhere in the world. <br>ParallelCoin uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network.<br> ParallelCoin is also the name of the open source software which enables the use of this currency.</p>\\n        <a href=\\"#specs\\" class=\\"button big scrolly\\">Specifications</a>\\n      </div>\\n    </div>\\n  </article>\\n</div>\\n\\n<!-- Specs -->\\n<div class=\\"wrapper style1\\">\\n  <article class=\\"container\\" id=\\"specs\\">\\n    <div class=\\"row\\">\\n      <div class=\\"d12u\\">\\n        <header>\\n          <h1>ParallelCoin specifications</h1>\\n        </header>\\n        <p>Multi-algo proof of work crypto currency.<br>Fair release with no premine, no IPO and no ICO.<br></p>\\n        <ul>\\n          <li>Algorithms: SHA256D &amp; SCRYPT</li>\\n          <li>Abbreviation: DUO</li>\\n          <li>Total Coins: 1,000,000</li>\\n          <li>Block Reward: Blocks 1-998 = 0.02 DUO (Fair Release) | Blocks &gt; 998 = 2 DUO</li>\\n          <li>Block Time: 5 minutes</li>\\n          <li>Halving Interval: 250,000 blocks</li>\\n          <li>P2P Port: 11047 (21047 Testnet)</li>\\n          <li>RPC Port: 11048 (21048 Testnet)</li>\\n        </ul>\\n        \\n        <a href=\\"#work\\" class=\\"button big scrolly\\">Get started!</a>\\n      </div>\\n    </div>\\n  </article>\\n</div>\\n\\n<!-- Work -->\\n<div class=\\"wrapper style2\\">\\n  <article id=\\"work\\">\\n    <header>\\n      <h2>Download</h2>\\n      <p>Wallets for your system.</p>\\n    </header>\\n    <div class=\\"container\\">\\n      <div class=\\"row\\">\\n        <div class=\\"d4u\\">\\n          <section class=\\"box style1\\">\\n            <span class=\\"icon featured fa-windows\\"></span>\\n            <h3>Windows</h3>\\n            <a href=\\"https://github.com/p9c/pod/releases/download/1.2.0/Parallelcoin-qt-v1.2.0.0-Win.zip\\" target=\\"_blank\\">\\n              <p>Download Windows wallet.</p>\\n            </a>\\n          </section>\\n        </div>\\n        <div class=\\"d4u\\">\\n          <section class=\\"box style1\\">\\n            <span class=\\"icon featured fa-linux\\"></span>\\n            <h3>Linux</h3>\\n            <a href=\\"https://github.com/p9c/pod/releases/download/1.2.0/parallelcoin-qt-x86_64.AppImage\\" target=\\"_blank\\">\\n              <p>Download QT wallet App Image.</p>\\n            </a>\\n            <a href=\\"https://github.com/p9c/pod/releases/download/1.2.0/parallelcoind-x86_64.AppImage\\" target=\\"_blank\\">\\n              <p>Download daemon App Image.</p>\\n            </a>\\n          </section>\\n        </div>\\n        <div class=\\"d4u\\">\\n          <section class=\\"box style1\\">\\n            <span class=\\"icon featured fa-github\\"></span>\\n            <h3>Source</h3>\\n            <a href=\\"https://github.com/parallelcointeam/parallelcoin\\" target=\\"_blank\\">\\n              <p>View source on GitHub.</p>\\n            </a>\\n          </section>\\n        </div>\\n      </div>\\n    </div>\\n    <footer>\\n      <p>\\n      <p>If your wallet does not want to start syncing:</p>\\n      <p>Try adding these nodes to your configuration (parallelcoin.conf file located in the wallet folder):</p>\\n\\n      <p>\\n        <small>\\n          addnode=185.69.55.35:11047<br/>\\n          addnode=46.28.107.182:11047<br/>\\n          addnode=91.206.16.214:11047<br/>\\n          addnode=157.161.128.62:11047<br/>\\n          addnode=85.15.179.171:11047<br/>\\n          addnode=103.254.148.9:11047<br/>\\n          addnode=144.217.73.92:11047<br/>\\n          addnode=165.227.110.22:11047<br/>\\n          addnode=194.135.88.119:11047<br/>\\n          addnode=73.164.170.207:11047<br/>\\n          addnode=76.176.77.120:11047<br/>\\n          addnode=89.40.12.55:11047<br/>\\n          addnode=coins.prohashing.com:6245</small>\\n      </p>\\n\\n\\n      <p>This should help you getting your Parallelcoin wallet to start syncing, and as soon it started syncing it will also find and add further nodes automatically.</p>\\n      <a href=\\"#portfolio\\" class=\\"button big scrolly\\">Resources</a>\\n    </footer>\\n  </article>\\n</div>\\n\\n<!-- Portfolio -->\\n<div class=\\"wrapper style3\\">\\n  <article id=\\"portfolio\\">\\n    <header>\\n      <h2>Resources</h2>\\n      <p>Here you can find pools and exchanges for ParallelCoin.</p>\\n    </header>\\n    <div class=\\"container\\">\\n      <div class=\\"row\\">\\n        <div class=\\"d4u\\">\\n          <article class=\\"box style2\\">\\n            <h3>Exchanges</h3>\\n            <p><a href=\\"https://dex-trade.com/spot/trading/DUOBTC\\" target=\\"_blank\\">Dex-Trade DUO-BTC</a></p>\\n            <p><a href=\\"https://dex-trade.com/spot/trading/DUOUSDT\\" target=\\"_blank\\">Dex-Trade DUO-USDT</a></p>\\n            <p><a href=\\"https://c-patex.com/markets/duobtc\\" target=\\"_blank\\">C-Patex DUO-BTC</a></p>\\n            <p><a href=\\"https://c-patex.com/markets/duoltc\\" target=\\"_blank\\">C-Patex DUO-LTC</a></p>\\n            <p><a href=\\"https://c-patex.com/markets/duodoge\\" target=\\"_blank\\">C-Patex DUO-DOGE</a></p>\\n          </article>\\n        </div>\\n        <div class=\\"d4u\\">\\n          <article class=\\"box style2\\">\\n            <h3>Blockchain explorer</h3>\\n            <p><a href=\\"http://explorer.parallelcoin.info/\\" target=\\"_blank\\">ParallelCoin block explorer</a></p>\\n            <p><a href=\\"https://prohashing.com/explorer/Parallelcoin/\\" target=\\"_blank\\">Prohashing block explorer</a></p>\\n          </article>\\n        </div>\\n\\n        <div class=\\"d4u\\">\\n          <article class=\\"box style2\\">\\n            <h3>Faucet</h3>\\n            <p><a href=\\"http://faucet.parallelcoin.info/\\">ParallelCoin Faucet</a></p>\\n          </article>\\n        </div>\\n      </div>\\n      <div class=\\"row\\">\\n        <div class=\\"d6u\\">\\n          <article class=\\"box style2\\">\\n            <h3>Pools</h3>\\n            <p><a href=\\"https://gigapool.eu/site/mining\\" target=\\"_blank\\">Gigapool scrypt pool</a></p>\\n            <p><a href=\\"http://duo.smarterhash.com/\\" target=\\"_blank\\">Smarterhash</a></p>\\n            <p><a href=\\"http://italyiimp.com/site/mining/\\" target=\\"_blank\\">Italyiimp</a></p>\\n            <p><a href=\\"https://duo.coinstop.me/\\" target=\\"_blank\\">Coinstop</a></p>\\n            <p><a href=\\"http://timeteh.com/\\" target=\\"_blank\\">TimeTeh</a></p>\\n          </article>\\n        </div>\\n        <div class=\\"d6u\\">\\n          <article class=\\"box style2\\">\\n            <h3>Market Information</h3>\\n            <p><a href=\\"http://coinmarketcap.com/currencies/parallelcoin\\" target=\\"_blank\\">Coinmarketcap</a></p>\\n            <p><a href=\\"https://bitinfocharts.com/de/parallelcoin/\\" target=\\"_blank\\">bitinfocharts</a></p>\\n            <p><a href=\\"https://www.cryptocompare.com/coins/duo/overview\\" target=\\"_blank\\">Cryptocompare</a></p>\\n            <p><a href=\\"http://www.cryptocoincharts.info/coins/show/duo\\" target=\\"_blank\\">Cryptocoincharts</a></p>\\n            <p><a href=\\"https://www.coinhills.com/market/duo/\\" target=\\"_blank\\">Coinhills</a></p>\\n            <p><a href=\\"http://www.blockchainstats.org/altcoin-market-data/parallelcoin-market-data/\\" target=\\"_blank\\">Blockchainstats</a></p>\\n          </article>\\n        </div>\\n      </div>\\n    </div>\\n    <footer>\\n      <p>More information?</p>\\n      <a href=\\"#contact\\" class=\\"button big scrolly\\">More</a>\\n    </footer>\\n  </article>\\n</div>\\n\\n\\n\\n<!-- Portfolio -->\\n<div class=\\"wrapper style3\\">\\n  <article id=\\"portfolio\\">\\n    <header>\\n      <h2>Latest info</h2>\\n      <p>Here you can find latest information about development of ParallelCoin.</p>\\n    </header>\\n    <div class=\\"container\\">\\n      <div class=\\"row\\">\\n        <div class=\\"d6u\\">\\n          <article class=\\"box style2\\">\\n            <h3>Facebook</h3>\\n\\n            <amp-facebook-page width=\\"340\\" height=\\"430\\" layout=\\"responsive\\" data-hide-cover=\\"true\\" data-href=\\"https://www.facebook.com/parallelcoin/\\">\\n            </amp-facebook-page>\\n\\n          </article>\\n        </div>\\n        <div class=\\"d6u\\">\\n          <article class=\\"box style2\\">\\n            <h3>Twitter</h3>\\n\\n            <amp-twitter width=\\"340\\" height=\\"430\\" layout=\\"responsive\\" data-tweetid=\\"1326573881138810883\\">\\n            </amp-twitter>\\n          </article>\\n        </div>\\n      </div>\\n    </div>\\n    <footer>\\n      <p>More information?</p>\\n      <a href=\\"#contact\\" class=\\"button big scrolly\\">More</a>\\n    </footer>\\n  </article>\\n</div>\\n\\n<!-- Contact -->\\n<div class=\\"wrapper style4\\">\\n  <article id=\\"contact\\" class=\\"container 75%\\">\\n    <header>\\n      <h2>Have some question or suggestion?</h2>\\n      <p>If you have anything to ask development team do not hesitate to ask.</p>\\n    </header>\\n    <div>\\n      <!--\\t\\t\\t<div class=\\"row\\">\\n              <div class=\\"12u\\">\\n                <form method=\\"post\\" action=\\"#\\">\\n                  <div>\\n                    <div class=\\"row\\">\\n                      <div class=\\"6u\\">\\n                        <input type=\\"text\\" name=\\"name\\" id=\\"name\\" placeholder=\\"Name\\" />\\n                      </div>\\n                      <div class=\\"6u\\">\\n                        <input type=\\"text\\" name=\\"email\\" id=\\"email\\" placeholder=\\"Email\\" />\\n                      </div>\\n                    </div>\\n                    <div class=\\"row\\">\\n                      <div class=\\"12u\\">\\n                        <input type=\\"text\\" name=\\"subject\\" id=\\"subject\\" placeholder=\\"Subject\\" />\\n                      </div>\\n                    </div>\\n                    <div class=\\"row\\">\\n                      <div class=\\"12u\\">\\n                        <textarea name=\\"message\\" id=\\"message\\" placeholder=\\"Message\\"></textarea>\\n                      </div>\\n                    </div>\\n                    <div class=\\"row 200%\\">\\n                      <div class=\\"12u\\">\\n                        <ul class=\\"actions\\">\\n                          <li><input type=\\"submit\\" value=\\"Send Message\\" /></li>\\n                          <li><input type=\\"reset\\" value=\\"Clear Form\\" class=\\"alt\\" /></li>\\n                        </ul>\\n                      </div>\\n                    </div>\\n                  </div>\\n                </form>\\n              </div>\\n            </div>  -->\\n      <div class=\\"row\\">\\n        <div class=\\"d12u\\">\\n          <hr/>\\n          <h3>Find ParallelCoin on ...</h3>\\n          <ul class=\\"social\\">\\n            <li><a href=\\"https://twitter.com/parallelcoinduo\\" class=\\"icon fa-twitter\\"><span class=\\"label\\">Twitter</span></a></li>\\n            <li><a href=\\"https://www.facebook.com/parallelcoin\\" class=\\"icon fa-facebook\\"><span class=\\"label\\">Facebook</span></a></li>\\n            <!--\\n            <li><a href=\\"#\\" class=\\"icon fa-dribbble\\"><span class=\\"label\\">Dribbble</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-linkedin\\"><span class=\\"label\\">LinkedIn</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-tumblr\\"><span class=\\"label\\">Tumblr</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-google-plus\\"><span class=\\"label\\">Google+</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-github\\"><span class=\\"label\\">Github</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-rss\\"><span>RSS</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-instagram\\"><span>Instagram</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-foursquare\\"><span>Foursquare</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-skype\\"><span>Skype</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-soundcloud\\"><span>Soundcloud</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-youtube\\"><span>YouTube</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-blogger\\"><span>Blogger</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-flickr\\"><span>Flickr</span></a></li>\\n            <li><a href=\\"#\\" class=\\"icon fa-vimeo\\"><span>Vimeo</span></a></li>\\n            -->\\n          </ul>\\n          <hr/>\\n        </div>\\n      </div>\\n    </div>\\n    <footer>\\n      <ul id=\\"copyright\\">\\n        <li>&copy; ParallelCoin - DUO. No rights reserved.</li>\\n      </ul>\\n      <ul id=\\"copyright\\">\\n        <li><a href=\\"http://marcetin.com/\\">marcetin</a></li>\\n        <li><a href=\\"https://bitstickers.net/\\">BitStickers</a></li>\\n        <li><a href=\\"http://com-http.us/\\">Crypto Currencies World</a></li>\\n        <li><a href=\\"http://com-http.org/\\">Webmaster Resource</a></li>\\n      </ul>\\n    </footer>\\n  </article>\\n  <a href=\\"#top\\" class=\\"button big scrolly\\">Top</a>\\n</div>\\n\\n</div>\\n"],"names":[],"mappings":"AAUc,6CAAG,CAAC,8CAAI,CAAsB,4CAAE,CAAC,4CAAE,CAAC,4CAAE,CAAU,2CAAC,CAAgB,2CAAC,CAAoE,+CAAK,CAAuD,4CAAE,CAAC,4CAAE,CAAqE,iDAAO,CAA8C,gDAAM,CAAC,gDAAM,CAAa,6CAAG,CAAa,OAAO,0CAA8B,CAAC,OAAO,CAAC,CAAC,QAAQ,CAAC,CAAC,OAAO,CAAC,CAAC,UAAU,IAAI,CAAC,KAAK,OAAO,CAAC,eAAe,QAAQ,AAAC,CAAC,iDAAO,CAAiC,gDAAM,CAAC,gDAAM,CAAa,6CAAG,CAAC,iDAAO,CAAC,QAAQ,KAAK,AAAC,CAAC,AAAuB,4CAAE,CAAC,WAAW,IAAI,AAAC,CAAC,AAIpnB,0CAAC,CAAE,0CAAC,OAAO,CAAE,0CAAC,MAAM,AAAC,CAAC,AAClB,eAAe,CAAE,UAAU,CAC3B,kBAAkB,CAAE,UAAU,CAC9B,UAAU,CAAE,UAAU,AAC1B,CAAC,AAID,UAAU,0CAAC,CAAC,AACR,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,CAGlB,KAAK,CAAE,GAAG,AACd,CAAC,AAQD,IAAI,0CAAC,CAAC,AACF,aAAa,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,AACxC,CAAC,AAED,kBAAI,CAAG,4BAAE,CAAC,AACN,KAAK,CAAE,IAAI,AACf,CAAC,AAED,8CAAI,MAAM,CAAE,8CAAI,OAAO,AAAC,CAAC,AACrB,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,AACb,CAAC,AAcD,kBAAI,CAAG,4BAAE,CAAC,AAEN,OAAO,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,AAC1B,CAAC,AAED,IAAI,0CAAC,CAAC,AAEF,MAAM,CAAE,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,AAC9B,CAAC,AAeD,KAAK,0CAAC,CAAC,AAAC,KAAK,CAAE,IAAI,CAAE,KAAK,CAAE,IAAI,CAAE,WAAW,CAAE,CAAC,AAAE,CAAC,AAInD,IAAI,0CAAC,CAAC,AAAC,KAAK,CAAE,cAAc,CAAE,KAAK,CAAE,IAAI,CAAE,WAAW,CAAE,CAAC,AAAE,CAAC,AAE5D,IAAI,0CAAC,CAAC,AAAC,KAAK,CAAE,GAAG,CAAE,KAAK,CAAE,IAAI,CAAE,WAAW,CAAE,CAAC,AAAE,CAAC,AAEjD,IAAI,0CAAC,CAAC,AAAC,KAAK,CAAE,cAAc,CAAE,KAAK,CAAE,IAAI,CAAE,WAAW,CAAE,CAAC,AAAE,CAAC,AAY5D,KAAK,AAAC,CAAC,AACH,MAAM,CAAE,OAAO,CACf,YAAY,CAAE,OAAO,CAErB,OAAO,CAAE,OAAO,CAChB,QAAQ,CAAE,OAAO,CACjB,QAAQ,CAAE,OAAO,CACjB,KAAK,CAAE,OAAO,CACd,QAAQ,CAAE,OAAO,CAEjB,OAAO,CAAE,OAAO,CAChB,OAAO,CAAE,OAAO,CAEhB,YAAY,OAAO,CACnB,OAAO,OAAO,CACd,aAAa,OAAO,CAEpB,OAAO,OAAO,CACd,QAAQ,OAAO,CACf,SAAS,CAAE,OAAO,CAGlB,cAAc,CAAE,wBAAwB,CACxC,aAAa,CAAE,gBAAgB,CAE/B,aAAa,CAAE,wBAAwB,CACvC,YAAY,CAAE,gBAAgB,CAC9B,YAAY,CAAE,mBAAmB,AAGrC,CAAC,AA2CD,2CAAC,CAAE,2CAAC,QAAQ,AACZ,CAAC,AACG,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CACtC,kBAAkB,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CACzC,aAAa,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CACpC,cAAc,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CACrC,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,AACrC,CAAC,AA4CD,4CAAE,CAAE,4CAAE,CAAE,EAAE,0CACV,CAAC,AACG,KAAK,CAAE,OAAO,AAClB,CAAC,AAQD,4CAAE,CAAE,EAAE,0CACN,CAAC,AACG,WAAW,CAAE,GAAG,AACpB,CAAC,AAED,EAAE,0CACF,CAAC,AACG,WAAW,CAAE,GAAG,AACpB,CAAC,AAiBD,EAAE,0CACF,CAAC,AACG,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,CAC1B,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAClC,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CACjD,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AACvB,CAAC,AAED,2CAAC,CAAE,EAAE,0CACL,CAAC,AACG,aAAa,CAAE,GAAG,AACtB,CAAC,AAwID,iDAAO,CACP,OAAO,0CACP,CAAC,AACG,aAAa,CAAE,GAAG,AACtB,CAAC,AAED,qBAAO,6BAAG,WAAW,CACrB,qBAAO,6BAAG,WAAW,AACrB,CAAC,AACG,aAAa,CAAE,CAAC,AACpB,CAAC,AAED,iDAAO,WAAW,CAClB,iDAAO,WAAW,AAClB,CAAC,AACG,aAAa,CAAE,CAAC,AACpB,CAAC,AAID,MAAM,0CACN,CAAC,AACG,OAAO,CAAE,YAAY,CACrB,QAAQ,CAAE,QAAQ,AACtB,CAAC,AAQD,MAAM,IAAI,0CACV,CAAC,AACG,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACf,CAAC,AAgCD,OAAO,0CACP,CAAC,AACG,kBAAkB,CAAE,IAAI,CACxB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,IAAI,CAAC,CACZ,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAC/C,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,CAClG,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,qBAAqB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAC7K,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,wBAAwB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAChL,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,mBAAmB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAC3K,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,oBAAoB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAC5K,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,gBAAgB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CACxK,eAAe,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CACjD,kBAAkB,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CACpD,aAAa,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CAC/C,cAAc,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CAChD,UAAU,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,AAChD,CAAC,AAKD,iDAAO,MAAM,AACb,CAAC,AACG,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CAAC,AAChB,CAAC,AAKD,iDAAO,OAAO,AACd,CAAC,AACG,gBAAgB,CAAE,OAAO,CACzB,GAAG,CAAE,GAAG,AACZ,CAAC,AA6CD,EAAE,OAAO,0CACT,CAAC,AACG,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,CAAC,AACb,CAAC,AAED,EAAE,qBAAO,CAAC,EAAE,4BACZ,CAAC,AACG,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,MAAM,CACd,GAAG,CAAE,CAAC,AACV,CAAC,AAED,EAAE,qBAAO,CAAC,gBAAE,CAAC,CAAC,cAAC,CAAC,AACZ,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,GAAG,CAAE,CAAC,CACN,QAAQ,CAAE,QAAQ,CAElB,eAAe,CAAE,GAAG,CAAC,GAAG,CAAC,WAAW,CACpC,kBAAkB,CAAE,GAAG,CAAC,GAAG,CAAC,WAAW,CACvC,aAAa,CAAE,GAAG,CAAC,GAAG,CAAC,WAAW,CAClC,cAAc,CAAE,GAAG,CAAC,GAAG,CAAC,WAAW,CACnC,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,WAAW,AACnC,CAAC,AAED,EAAE,qBAAO,CAAC,gBAAE,CAAC,eAAC,OAAO,AAAC,CAAC,AACnB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,qBAAqB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAC7K,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,wBAAwB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAChL,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,mBAAmB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAC3K,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,oBAAoB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAC5K,iBAAiB,IAAI,uFAAuF,CAAC,CAAC,gBAAgB,GAAG,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CACxK,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,OAAO,CAAC,CAAC,CAAC,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAC3F,KAAK,CAAE,IAAI,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAC9C,KAAK,CAAE,IAAI,CAEX,eAAe,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CACjD,kBAAkB,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CACpD,aAAa,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CAC/C,cAAc,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CAChD,UAAU,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,AAChD,CAAC,AAED,EAAE,qBAAO,CAAC,EAAE,CAAC,CAAC,WAAW,4BAAE,CAAC,AAAC,gBAAgB,CAAE,OAAO,AAAE,CAAC,AACzD,EAAE,qBAAO,CAAC,EAAE,CAAC,CAAC,YAAY,4BAAE,CAAC,AAAC,gBAAgB,CAAE,OAAO,AAAE,CAAC,AAgB1D,EAAE,qBAAO,CAAC,gBAAE,CAAC,eAAC,MAAM,AACpB,CAAC,AACG,GAAG,CAAE,IAAI,AACb,CAAC,AAED,EAAE,qBAAO,CAAC,gBAAE,CAAC,eAAC,MAAM,OAAO,AAC3B,CAAC,AACG,gBAAgB,CAAE,WAAW,AACjC,CAAC,AAkCD,IAAI,0CACJ,CAAC,AACG,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACnF,UAAU,CAAE,MAAM,AACtB,CAAC,AAMD,KAAK,0CAAC,CAAC,AACH,eAAe,CAAE,IAAI,AACzB,CAAC,AAED,+CAAK,OAAO,AAAC,CAAC,AACV,OAAO,CAAE,YAAY,CACrB,WAAW,CAAE,WAAW,CACxB,SAAS,CAAE,MAAM,CACjB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,CAAC,CACd,uBAAuB,WAAW,CAClC,wBAAwB,SAAS,AACrC,CAAC,AAED,mBAAK,CAAG,MAAM,4BAAC,CAAC,AACZ,OAAO,CAAE,IAAI,AACjB,CAAC,AAED,KAAK,SAAS,0CACd,CAAC,AACG,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CACnB,MAAM,CAAE,OAAO,AACnB,CAAC,AAED,KAAK,mDAAS,OAAO,AACrB,CAAC,AACG,SAAS,CAAE,GAAG,AAClB,CAAC,AAMD,QAAQ,0CACR,CAAC,AACG,gBAAgB,CAAE,IAAI,qFAAqF,CAAC,CAC5G,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AAC7F,CAAC,AAED,QAAQ,MAAM,0CACd,CAAC,AACG,UAAU,CAAE,IAAI,AACpB,CAAC,AAED,QAAQ,iDAAO,CAAC,AACZ,gBAAgB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,AAE1B,CAAC,AAED,QAAQ,OAAO,0CACf,CAAC,AACG,gBAAgB,CAAE,IAAI,CACtB,gBAAgB,CAAE,OAAO,AAC7B,CAAC,AACD,QAAQ,qBAAO,CAAC,8BAAE,CAAC,QAAQ,qBAAO,CAAC,6BAAC,CAAC,QAAQ,qBAAO,CAAC,EAAE,4BACvD,CAAC,AACG,KAAK,CAAE,OAAO,AAClB,CAAC,AAED,QAAQ,OAAO,0CACf,CAAC,AACG,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,AACjC,CAAC,AAED,QAAQ,OAAO,0CACf,CAAC,AACG,gBAAgB,CAAE,OAAO,CACzB,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,AACjC,CAAC,AAED,QAAQ,OAAO,0CACf,CAAC,AACG,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,OAAO,AACtC,CAAC,AAGD,QAAQ,qBAAO,CAAC,8BAAE,CAClB,QAAQ,qBAAO,CAAC,EAAE,4BAIlB,CAAC,AACG,KAAK,CAAE,IAAI,AACf,CAAC,AAuBD,IAAI,0CACJ,CAAC,AACG,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,MAAM,CAClB,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,OAAO,AACnB,CAAC,AAED,kBAAI,CAAC,EAAE,4BACP,CAAC,AACG,aAAa,CAAE,CAAC,AACpB,CAAC,AAED,kBAAI,CAAC,EAAE,4BACP,CAAC,AACG,OAAO,CAAE,YAAY,AACzB,CAAC,AAED,kBAAI,CAAC,CAAC,4BACN,CAAC,AACG,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CAAC,AACd,CAAC,AAED,kBAAI,CAAC,6BAAC,MAAM,AACZ,CAAC,AACG,KAAK,CAAE,IAAI,CAAC,AAChB,CAAC,AAuBD,kBAAI,CAAC,MAAM,4BACX,CAAC,AACG,aAAa,CAAE,GAAG,AACtB,CAAC,AAWD,kBAAI,CAAC,eAAC,CAAC,CAAC,cACR,CAAC,AACG,KAAK,CAAE,OAAO,AAClB,CAAC,AAMD,UAAU,0CACV,CAAC,AACG,KAAK,CAAE,IAAI,AACf,CAAC,AAED,wBAAU,CAAC,CAAC,4BACZ,CAAC,AACG,KAAK,CAAE,OAAO,CAEd,eAAe,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CACtC,kBAAkB,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CACzC,aAAa,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CACpC,cAAc,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CACrC,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,AACrC,CAAC,AAED,wBAAU,CAAC,6BAAC,MAAM,AAClB,CAAC,AACG,KAAK,CAAE,IAAI,AACf,CAAC,AAED,kBAAI,CAAC,6BAAC,CAAC,AACH,MAAM,CAAE,CAAC,AACb,CAAC,AAgBD,EAAE,0CACF,CAAC,AACG,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,QAAQ,AAC5B,CAAC,AAED,EAAE,0CACF,CAAC,AACG,SAAS,CAAE,GAAG,CACd,cAAc,CAAE,QAAQ,AAC5B,CAAC,AAED,EAAE,0CACF,CAAC,AACG,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,QAAQ,AAC5B,CAAC,AAED,4CAAE,CAAE,4CAAE,CAAE,EAAE,0CACV,CAAC,AACG,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,WAAW,CAAE,eAAe,AAChC,CAAC,AAED,MAAM,0CACN,CAAC,AACG,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AACrB,CAAC,AAED,oBAAM,CAAG,CAAC,4BACV,CAAC,AACG,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,AACb,CAAC,AAED,MAAM,0CACN,CAAC,AACG,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACrB,CAAC,AAED,oBAAM,CAAG,CAAC,4BACV,CAAC,AACG,SAAS,CAAE,MAAM,AACrB,CAAC,AAkBD,OAAO,0CACP,CAAC,AACG,OAAO,CAAE,GAAG,CAAC,MAAM,CAAC,GAAG,CAAC,MAAM,CAC9B,SAAS,CAAE,KAAK,AACpB,CAAC,AAKD,OAAO,IAAI,0CACX,CAAC,AACG,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,QAAQ,AAC5B,CAAC,AAID,IAAI,0CACJ,CAAC,AACG,OAAO,CAAE,GAAG,AAChB,CAAC,AAED,IAAI,OAAO,0CACX,CAAC,AACG,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,GAAG,AAC9B,CAAC,AAED,IAAI,qBAAO,CAAC,EAAE,4BACd,CAAC,AACG,aAAa,CAAE,KAAK,AACxB,CAAC,AAMD,IAAI,qBAAO,CAAC,EAAE,4BACd,CAAC,AACG,aAAa,CAAE,MAAM,AACzB,CAAC,AAeD,QAAQ,0CACR,CAAC,AACG,OAAO,CAAE,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACpB,UAAU,CAAE,MAAM,AACtB,CAAC,AAED,QAAQ,MAAM,0CACd,CAAC,AACG,WAAW,CAAE,IAAI,AACrB,CAAC,AAUD,kBAAI,CAAC,6BAAC,MAAM,AACZ,CAAC,AACG,UAAU,CAAE,OAAO,AACvB,CAAC,AAED,kBAAI,CAAC,6BAAC,OAAO,AACb,CAAC,AACG,UAAU,CAAE,OAAO,AACvB,CAAC,AAED,kBAAI,CAAC,CAAC,4BACN,CAAC,AACG,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CAAC,GAAG,CAC5B,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAC/B,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,GAAG,CAClB,eAAe,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CACjD,kBAAkB,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CACpD,aAAa,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CAC/C,cAAc,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CAChD,UAAU,CAAE,gBAAgB,CAAC,GAAG,CAAC,WAAW,CAC5C,KAAK,CAAE,IAAI,AACf,CAAC,AAMD,IAAI,0CACJ,CAAC,AACG,UAAU,CAAE,IAAI,AACpB,CAAC,AAED,kBAAI,CAAC,MAAM,4BACX,CAAC,AACG,WAAW,MAAM,CACjB,MAAM,CAAE,CAAC,AACb,CAAC,AAED,EAAE,0CACF,CAAC,AACG,UAAU,CAAE,MAAM,CAClB,YAAY,IAAI,AACpB,CAAC,AAED,kBAAI,CAAC,CAAC,4BACN,CAAC,AACG,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,MAAM,AACvB,CAAC,AAMD,sBAAQ,CAAC,MAAM,4BACf,CAAC,AACG,SAAS,CAAE,KAAK,AACpB,CAAC,AAMD,UAAU,0CACV,CAAC,AACG,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,AACpB,CAAC,AAED,wBAAU,CAAC,EAAE,4BACb,CAAC,AACG,OAAO,CAAE,YAAY,CACrB,WAAW,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtC,UAAU,CAAE,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAClD,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAClB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,AACrB,CAAC,AAED,wBAAU,CAAC,8BAAE,YAAY,AACzB,CAAC,AACG,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IAAI,CAChB,YAAY,CAAE,CAAC,CACf,WAAW,CAAE,CAAC,AAClB,CAAC,AAmCD,WAAW,wBAAW,CAAC,AACnB,EAAE,AAAE,CAAC,QAAQ,CAAC,CAAC,AACf,GAAG,AAAE,CAAC,QAAQ,CAAC,CAAC,AAChB,MAAM,AAAC,CAAC,KAAK,CAAC,CAAC,AACf,IAAI,AAAC,CAAC,QAAQ,KAAK,CAAC,QAAQ,CAAC,CAAC,KAAK,KAAK,CAAC,AAC7C,CAAC,AAkGD,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACvC,EAAE,0CACF,CAAC,AACG,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,CAAC,AACrB,CAAC,AACD,+CAAK,CAAsB,8CAAI,CAAQ,8CAAI,CAAQ,IAAI,0CAAmB,CAAC,AAAC,KAAK,CAAE,IAAI,CAAE,KAAK,CAAE,IAAI,CAAE,WAAW,CAAE,CAAC,AAAE,CAAC,AAEvH,8CAAI,CAAC,AACD,WAAW,MAAM,AACrB,CAAC,AAWL,CAAC,AAID,+CAAK,CAAC,KAAK,OAAO,CAAC,AACnB,+CAAK,CAAC,KAAK,OAAO,CAAC"}`
  };
  var Legacy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$2);
    return `${$$result.head += `<script async custom-element="${"amp-video"}" src="${"https://cdn.ampproject.org/v0/amp-video-0.1.js"}" class="${"svelte-vnjlay"}" data-svelte="svelte-hz0ftm"><\/script><script async custom-element="${"amp-twitter"}" src="${"https://cdn.ampproject.org/v0/amp-twitter-0.1.js"}" class="${"svelte-vnjlay"}" data-svelte="svelte-hz0ftm"><\/script><script async custom-element="${"amp-facebook-page"}" src="${"https://cdn.ampproject.org/v0/amp-facebook-page-0.1.js"}" class="${"svelte-vnjlay"}" data-svelte="svelte-hz0ftm"><\/script><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" class="${"svelte-vnjlay"}" data-svelte="svelte-hz0ftm"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin class="${"svelte-vnjlay"}" data-svelte="svelte-hz0ftm"><link href="${"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Open+Sans:wght@300;600;700&family=Oswald:wght@300;700&display=swap"}" rel="${"stylesheet"}" class="${"svelte-vnjlay"}" data-svelte="svelte-hz0ftm">${$$result.title = `<title>ParallelCoin Legacy - Plan 9 from Cryptospace</title>`, ""}<link rel="${"canonical"}" href="${"https://legacy.parallelcoin.info/"}" class="${"svelte-vnjlay"}" data-svelte="svelte-hz0ftm">`, ""}

<div class="${"scs svelte-vnjlay"}">
<nav id="${"nav"}" class="${"svelte-vnjlay"}"><ul class="${"container svelte-vnjlay"}"><li class="${"svelte-vnjlay"}"><a href="${"#top"}" class="${"svelte-vnjlay"}">Top</a></li>
    <li class="${"svelte-vnjlay"}"><a href="${"#specs"}" class="${"svelte-vnjlay"}">Specifications</a></li>
    <li class="${"svelte-vnjlay"}"><a href="${"#work"}" class="${"svelte-vnjlay"}">Downloads</a></li>
    <li class="${"svelte-vnjlay"}"><a href="${"#portfolio"}" class="${"svelte-vnjlay"}">Resources</a></li>
    <li class="${"svelte-vnjlay"}"><a href="${"#contact"}" class="${"svelte-vnjlay"}">Contact</a></li></ul></nav>


<div class="${"wrapper style0 first svelte-vnjlay"}"><article class="${"container svelte-vnjlay"}" id="${"top"}"><div class="${"row svelte-vnjlay"}"><div class="${"d4u svelte-vnjlay"}"><span class="${"image fit svelte-vnjlay"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1024 1024"}" width="${"256"}" height="${"256"}" class="${"svelte-vnjlay"}"><path class="${"shp0 svelte-vnjlay"}" d="${"M512,0c-282.88,0 -512,229.12 -512,512c0,282.88 229.12,512 512,512c282.88,0 512,-229.12 512,-512c0,-282.88 -229.12,-512 -512,-512z"}"></path><path class="${"shp1 svelte-vnjlay"}" d="${"M634.88,198.42c19.2,5.12 34.56,12.79 51.2,23.03c29.44,19.2 52.48,42.25 70.4,72.97c19.2,30.72 26.88,65.28 26.88,102.4c0,35.84 -8.96,70.38 -26.87,101.1c-17.92,32 -40.96,56.33 -70.4,74.25c-16.64,10.24 -34.56,19.21 -51.2,24.33c-19.2,5.12 -38.4,7.68 -57.6,7.68v-71.68c34.56,-1.28 66.57,-12.8 94.72,-39.68c28.16,-26.88 42.23,-58.9 42.23,-97.3c0,-38.4 -12.79,-70.4 -39.67,-97.28c-26.88,-26.88 -58.87,-39.68 -97.27,-39.68c-38.4,0 -71.68,12.8 -97.27,39.68c-26.88,26.88 -39.7,58.88 -39.7,97.28v426.25c-15.36,-15.36 -39.66,-38.41 -69.1,-67.85v-358.4c0,-19.2 2.56,-38.38 7.68,-56.3c5.12,-19.2 12.78,-35.84 23.02,-51.2c19.2,-29.44 42.26,-52.5 72.98,-71.7c30.72,-17.92 65.28,-25.6 102.4,-25.6c19.2,0 39.68,2.58 57.6,7.7zM641.28,395.52c0,35.84 -29.43,65.3 -65.27,65.3c-37.12,1.28 -65.3,-28.18 -65.3,-65.3c0,-35.84 29.46,-65.28 65.3,-65.28c35.84,0 65.27,29.44 65.27,65.28zM320.01,369.92v344.32c-30.72,-30.72 -55.05,-53.76 -69.12,-69.12v-275.2z"}"></path></svg></span></div>
      <div class="${"d8u svelte-vnjlay"}"><header class="${"svelte-vnjlay"}"><h1 class="${"svelte-vnjlay"}">What is ParallelCoin?</h1></header>
        <p class="${"svelte-vnjlay"}">ParallelCoin is an new digital currency that enables instant payments to anyone, anywhere in the world. <br class="${"svelte-vnjlay"}">ParallelCoin uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network.<br class="${"svelte-vnjlay"}"> ParallelCoin is also the name of the open source software which enables the use of this currency.</p>
        <a href="${"#specs"}" class="${"button big scrolly svelte-vnjlay"}">Specifications</a></div></div></article></div>


<div class="${"wrapper style1 svelte-vnjlay"}"><article class="${"container svelte-vnjlay"}" id="${"specs"}"><div class="${"row svelte-vnjlay"}"><div class="${"d12u svelte-vnjlay"}"><header class="${"svelte-vnjlay"}"><h1 class="${"svelte-vnjlay"}">ParallelCoin specifications</h1></header>
        <p class="${"svelte-vnjlay"}">Multi-algo proof of work crypto currency.<br class="${"svelte-vnjlay"}">Fair release with no premine, no IPO and no ICO.<br class="${"svelte-vnjlay"}"></p>
        <ul class="${"svelte-vnjlay"}"><li class="${"svelte-vnjlay"}">Algorithms: SHA256D &amp; SCRYPT</li>
          <li class="${"svelte-vnjlay"}">Abbreviation: DUO</li>
          <li class="${"svelte-vnjlay"}">Total Coins: 1,000,000</li>
          <li class="${"svelte-vnjlay"}">Block Reward: Blocks 1-998 = 0.02 DUO (Fair Release) | Blocks &gt; 998 = 2 DUO</li>
          <li class="${"svelte-vnjlay"}">Block Time: 5 minutes</li>
          <li class="${"svelte-vnjlay"}">Halving Interval: 250,000 blocks</li>
          <li class="${"svelte-vnjlay"}">P2P Port: 11047 (21047 Testnet)</li>
          <li class="${"svelte-vnjlay"}">RPC Port: 11048 (21048 Testnet)</li></ul>
        
        <a href="${"#work"}" class="${"button big scrolly svelte-vnjlay"}">Get started!</a></div></div></article></div>


<div class="${"wrapper style2 svelte-vnjlay"}"><article id="${"work"}" class="${"svelte-vnjlay"}"><header class="${"svelte-vnjlay"}"><h2 class="${"svelte-vnjlay"}">Download</h2>
      <p class="${"svelte-vnjlay"}">Wallets for your system.</p></header>
    <div class="${"container svelte-vnjlay"}"><div class="${"row svelte-vnjlay"}"><div class="${"d4u svelte-vnjlay"}"><section class="${"box style1 svelte-vnjlay"}"><span class="${"icon featured fa-windows svelte-vnjlay"}"></span>
            <h3 class="${"svelte-vnjlay"}">Windows</h3>
            <a href="${"https://github.com/p9c/pod/releases/download/1.2.0/Parallelcoin-qt-v1.2.0.0-Win.zip"}" target="${"_blank"}" class="${"svelte-vnjlay"}"><p class="${"svelte-vnjlay"}">Download Windows wallet.</p></a></section></div>
        <div class="${"d4u svelte-vnjlay"}"><section class="${"box style1 svelte-vnjlay"}"><span class="${"icon featured fa-linux svelte-vnjlay"}"></span>
            <h3 class="${"svelte-vnjlay"}">Linux</h3>
            <a href="${"https://github.com/p9c/pod/releases/download/1.2.0/parallelcoin-qt-x86_64.AppImage"}" target="${"_blank"}" class="${"svelte-vnjlay"}"><p class="${"svelte-vnjlay"}">Download QT wallet App Image.</p></a>
            <a href="${"https://github.com/p9c/pod/releases/download/1.2.0/parallelcoind-x86_64.AppImage"}" target="${"_blank"}" class="${"svelte-vnjlay"}"><p class="${"svelte-vnjlay"}">Download daemon App Image.</p></a></section></div>
        <div class="${"d4u svelte-vnjlay"}"><section class="${"box style1 svelte-vnjlay"}"><span class="${"icon featured fa-github svelte-vnjlay"}"></span>
            <h3 class="${"svelte-vnjlay"}">Source</h3>
            <a href="${"https://github.com/parallelcointeam/parallelcoin"}" target="${"_blank"}" class="${"svelte-vnjlay"}"><p class="${"svelte-vnjlay"}">View source on GitHub.</p></a></section></div></div></div>
    <footer class="${"svelte-vnjlay"}"><p class="${"svelte-vnjlay"}"></p><p class="${"svelte-vnjlay"}">If your wallet does not want to start syncing:</p>
      <p class="${"svelte-vnjlay"}">Try adding these nodes to your configuration (parallelcoin.conf file located in the wallet folder):</p>

      <p class="${"svelte-vnjlay"}"><small class="${"svelte-vnjlay"}">addnode=185.69.55.35:11047<br class="${"svelte-vnjlay"}">
          addnode=46.28.107.182:11047<br class="${"svelte-vnjlay"}">
          addnode=91.206.16.214:11047<br class="${"svelte-vnjlay"}">
          addnode=157.161.128.62:11047<br class="${"svelte-vnjlay"}">
          addnode=85.15.179.171:11047<br class="${"svelte-vnjlay"}">
          addnode=103.254.148.9:11047<br class="${"svelte-vnjlay"}">
          addnode=144.217.73.92:11047<br class="${"svelte-vnjlay"}">
          addnode=165.227.110.22:11047<br class="${"svelte-vnjlay"}">
          addnode=194.135.88.119:11047<br class="${"svelte-vnjlay"}">
          addnode=73.164.170.207:11047<br class="${"svelte-vnjlay"}">
          addnode=76.176.77.120:11047<br class="${"svelte-vnjlay"}">
          addnode=89.40.12.55:11047<br class="${"svelte-vnjlay"}">
          addnode=coins.prohashing.com:6245</small></p>


      <p class="${"svelte-vnjlay"}">This should help you getting your Parallelcoin wallet to start syncing, and as soon it started syncing it will also find and add further nodes automatically.</p>
      <a href="${"#portfolio"}" class="${"button big scrolly svelte-vnjlay"}">Resources</a></footer></article></div>


<div class="${"wrapper style3 svelte-vnjlay"}"><article id="${"portfolio"}" class="${"svelte-vnjlay"}"><header class="${"svelte-vnjlay"}"><h2 class="${"svelte-vnjlay"}">Resources</h2>
      <p class="${"svelte-vnjlay"}">Here you can find pools and exchanges for ParallelCoin.</p></header>
    <div class="${"container svelte-vnjlay"}"><div class="${"row svelte-vnjlay"}"><div class="${"d4u svelte-vnjlay"}"><article class="${"box style2 svelte-vnjlay"}"><h3 class="${"svelte-vnjlay"}">Exchanges</h3>
            <p class="${"svelte-vnjlay"}"><a href="${"https://dex-trade.com/spot/trading/DUOBTC"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Dex-Trade DUO-BTC</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"https://dex-trade.com/spot/trading/DUOUSDT"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Dex-Trade DUO-USDT</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"https://c-patex.com/markets/duobtc"}" target="${"_blank"}" class="${"svelte-vnjlay"}">C-Patex DUO-BTC</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"https://c-patex.com/markets/duoltc"}" target="${"_blank"}" class="${"svelte-vnjlay"}">C-Patex DUO-LTC</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"https://c-patex.com/markets/duodoge"}" target="${"_blank"}" class="${"svelte-vnjlay"}">C-Patex DUO-DOGE</a></p></article></div>
        <div class="${"d4u svelte-vnjlay"}"><article class="${"box style2 svelte-vnjlay"}"><h3 class="${"svelte-vnjlay"}">Blockchain explorer</h3>
            <p class="${"svelte-vnjlay"}"><a href="${"http://explorer.parallelcoin.info/"}" target="${"_blank"}" class="${"svelte-vnjlay"}">ParallelCoin block explorer</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"https://prohashing.com/explorer/Parallelcoin/"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Prohashing block explorer</a></p></article></div>

        <div class="${"d4u svelte-vnjlay"}"><article class="${"box style2 svelte-vnjlay"}"><h3 class="${"svelte-vnjlay"}">Faucet</h3>
            <p class="${"svelte-vnjlay"}"><a href="${"http://faucet.parallelcoin.info/"}" class="${"svelte-vnjlay"}">ParallelCoin Faucet</a></p></article></div></div>
      <div class="${"row svelte-vnjlay"}"><div class="${"d6u svelte-vnjlay"}"><article class="${"box style2 svelte-vnjlay"}"><h3 class="${"svelte-vnjlay"}">Pools</h3>
            <p class="${"svelte-vnjlay"}"><a href="${"https://gigapool.eu/site/mining"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Gigapool scrypt pool</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"http://duo.smarterhash.com/"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Smarterhash</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"http://italyiimp.com/site/mining/"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Italyiimp</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"https://duo.coinstop.me/"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Coinstop</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"http://timeteh.com/"}" target="${"_blank"}" class="${"svelte-vnjlay"}">TimeTeh</a></p></article></div>
        <div class="${"d6u svelte-vnjlay"}"><article class="${"box style2 svelte-vnjlay"}"><h3 class="${"svelte-vnjlay"}">Market Information</h3>
            <p class="${"svelte-vnjlay"}"><a href="${"http://coinmarketcap.com/currencies/parallelcoin"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Coinmarketcap</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"https://bitinfocharts.com/de/parallelcoin/"}" target="${"_blank"}" class="${"svelte-vnjlay"}">bitinfocharts</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"https://www.cryptocompare.com/coins/duo/overview"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Cryptocompare</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"http://www.cryptocoincharts.info/coins/show/duo"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Cryptocoincharts</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"https://www.coinhills.com/market/duo/"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Coinhills</a></p>
            <p class="${"svelte-vnjlay"}"><a href="${"http://www.blockchainstats.org/altcoin-market-data/parallelcoin-market-data/"}" target="${"_blank"}" class="${"svelte-vnjlay"}">Blockchainstats</a></p></article></div></div></div>
    <footer class="${"svelte-vnjlay"}"><p class="${"svelte-vnjlay"}">More information?</p>
      <a href="${"#contact"}" class="${"button big scrolly svelte-vnjlay"}">More</a></footer></article></div>




<div class="${"wrapper style3 svelte-vnjlay"}"><article id="${"portfolio"}" class="${"svelte-vnjlay"}"><header class="${"svelte-vnjlay"}"><h2 class="${"svelte-vnjlay"}">Latest info</h2>
      <p class="${"svelte-vnjlay"}">Here you can find latest information about development of ParallelCoin.</p></header>
    <div class="${"container svelte-vnjlay"}"><div class="${"row svelte-vnjlay"}"><div class="${"d6u svelte-vnjlay"}"><article class="${"box style2 svelte-vnjlay"}"><h3 class="${"svelte-vnjlay"}">Facebook</h3>

            <amp-facebook-page width="${"340"}" height="${"430"}" layout="${"responsive"}" data-hide-cover="${"true"}" data-href="${"https://www.facebook.com/parallelcoin/"}" class="${"svelte-vnjlay"}"></amp-facebook-page></article></div>
        <div class="${"d6u svelte-vnjlay"}"><article class="${"box style2 svelte-vnjlay"}"><h3 class="${"svelte-vnjlay"}">Twitter</h3>

            <amp-twitter width="${"340"}" height="${"430"}" layout="${"responsive"}" data-tweetid="${"1326573881138810883"}" class="${"svelte-vnjlay"}"></amp-twitter></article></div></div></div>
    <footer class="${"svelte-vnjlay"}"><p class="${"svelte-vnjlay"}">More information?</p>
      <a href="${"#contact"}" class="${"button big scrolly svelte-vnjlay"}">More</a></footer></article></div>


<div class="${"wrapper style4 svelte-vnjlay"}"><article id="${"contact"}" class="${"container 75% svelte-vnjlay"}"><header class="${"svelte-vnjlay"}"><h2 class="${"svelte-vnjlay"}">Have some question or suggestion?</h2>
      <p class="${"svelte-vnjlay"}">If you have anything to ask development team do not hesitate to ask.</p></header>
    <div class="${"svelte-vnjlay"}">
      <div class="${"row svelte-vnjlay"}"><div class="${"d12u svelte-vnjlay"}"><hr class="${"svelte-vnjlay"}">
          <h3 class="${"svelte-vnjlay"}">Find ParallelCoin on ...</h3>
          <ul class="${"social svelte-vnjlay"}"><li class="${"svelte-vnjlay"}"><a href="${"https://twitter.com/parallelcoinduo"}" class="${"icon fa-twitter svelte-vnjlay"}"><span class="${"label svelte-vnjlay"}">Twitter</span></a></li>
            <li class="${"svelte-vnjlay"}"><a href="${"https://www.facebook.com/parallelcoin"}" class="${"icon fa-facebook svelte-vnjlay"}"><span class="${"label svelte-vnjlay"}">Facebook</span></a></li>
            </ul>
          <hr class="${"svelte-vnjlay"}"></div></div></div>
    <footer class="${"svelte-vnjlay"}"><ul id="${"copyright"}" class="${"svelte-vnjlay"}"><li class="${"svelte-vnjlay"}">\xA9 ParallelCoin - DUO. No rights reserved.</li></ul>
      <ul id="${"copyright"}" class="${"svelte-vnjlay"}"><li class="${"svelte-vnjlay"}"><a href="${"http://marcetin.com/"}" class="${"svelte-vnjlay"}">marcetin</a></li>
        <li class="${"svelte-vnjlay"}"><a href="${"https://bitstickers.net/"}" class="${"svelte-vnjlay"}">BitStickers</a></li>
        <li class="${"svelte-vnjlay"}"><a href="${"http://com-http.us/"}" class="${"svelte-vnjlay"}">Crypto Currencies World</a></li>
        <li class="${"svelte-vnjlay"}"><a href="${"http://com-http.org/"}" class="${"svelte-vnjlay"}">Webmaster Resource</a></li></ul></footer></article>
  <a href="${"#top"}" class="${"button big scrolly svelte-vnjlay"}">Top</a></div></div>`;
  });
  var Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return ``;
  });
  var css$1 = {
    code: ".vampira.svelte-1t5iqny.svelte-1t5iqny{background-image:url(https://s.okno.rs/parallelcoin/img/vampira3.png);background-repeat:no-repeat;background-position:right bottom;background-size:120px}.gopher.svelte-1t5iqny.svelte-1t5iqny{position:absolute;bottom:0;left:0}.section.svelte-1t5iqny.svelte-1t5iqny{background:#cfcfcf url(https://s.okno.rs/img/whitepaperboard.png);color:#303030}section.svelte-1t5iqny.svelte-1t5iqny{position:relative;display:inline-block;float:left;padding:3rem;box-sizing:border-box}section.svelte-1t5iqny h2.svelte-1t5iqny{margin-bottom:1rem}section.svelte-1t5iqny .entry-content.svelte-1t5iqny{line-height:1.4}h2.svelte-1t5iqny.svelte-1t5iqny,h4.svelte-1t5iqny.svelte-1t5iqny{font-family:plan9regular, serif;margin:0;font-weight:400;line-height:1.2}",
    map: `{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script>\\n    import HeadTitle from '$lib/components/HeadTitle.svelte';\\n    import Socials from '$lib/components/Socials.svelte';\\n<\/script>\\n<svelte:head>\\n<script async custom-element=\\"amp-lightbox\\" src=\\"https://cdn.ampproject.org/v0/amp-lightbox-0.1.js\\"><\/script>\\n\\n  <title>About ParallelCoin - Plan 9 from Cryptospace</title>\\n  <link rel=\\"canonical\\" href=\\"https://about.parallelcoin.info/\\">\\n</svelte:head>\\n      {@html '<amp-state id=\\"about\\" src=\\"https://api.parallelcoin.io/about\\"></amp-state>'}\\n  \\n<div class=\\"flex flex-1 flex-col text-center text-light md:container md:mx-auto md:px-0\\">\\n\\n            <HeadTitle>About ParallelCoin</HeadTitle>\\n          <nav class=\\"flex flex-col section bg-background-primary my-8 border-dashed border-2 border-black border-opacity-25\\" >\\n            <div class=\\"flex flex-col vampira p-8\\" >\\n            <h4 class=\\"pb-8 text-xl\\">Contents</h4>    \\n            <amp-list layout=\\"fixed-height\\" width=\\"auto\\" height=\\"180\\" src=\\"amp-state:about\\" reset-on-refresh items=\\"pasus\\" binding=\\"no\\">\\n                {@html \`<template type=\\"amp-mustache\\">\\n            <a href=\\"#\\" id=\\"'nav-'+{'{{slug}}'}\\" on=\\"tap:top.scrollTo(duration=200)\\" class=\\"pb-2 text-xl\\">{{title}}</a>\\n            </template>\`}\\n          </amp-list>\\n            </div>\\n          </nav>\\n          <amp-list layout=\\"flex-item\\" src=\\"amp-state:about\\" reset-on-refresh items=\\"pasus\\" binding=\\"no\\">\\n            <template type=\\"amp-mustache\\">\\n        <section class=\\"section my-8 bg-background-primary border-dashed border-2 border-black border-opacity-25 text-text-primary text-lg leading-relaxed\\" id=\\"{'{{slug}}'}\\">\\n            <h2 class=\\"text-3xl\\">{'{{title}}'}</h2>\\n            <div class=\\"entry-content\\">{'{{{html}}}'}</div>\\n            <amp-img src=\\"https://s.okno.rs/img/go/morning-coffee.gif\\" layout=\\"responsive\\" width=\\"100\\" height=\\"100\\" class=\\"gopher\\"></amp-img>\\n          </section>\\n        </template>\\n        </amp-list>\\n            {@html \`<a href=\\"#\\" id=\\"end\\" class=\\"my-0 mx-auto\\" on=\\"tap:top.scrollTo(duration=200)\\"><amp-img src=\\"https://s.okno.rs/img/go/unicorn.png\\" layout=\\"responsive\\" width=\\"100\\" height=\\"100\\" class=\\"inspector\\"></amp-img></a>\`}\\n</div>\\n\\n<div>\\n    \\n</div>\\n\\n<style>\\n    .vampira{\\n      background-image: url(https://s.okno.rs/parallelcoin/img/vampira3.png);\\n      background-repeat: no-repeat;\\n      background-position: right bottom;\\n      background-size: 120px;\\n    }\\n    .gopher{\\n      position: absolute;\\n      bottom: 0;\\n      left: 0;\\n    }\\n    \\n    .nav a{\\n      text-decoration: none;\\n    }\\n    .nav a:hover{\\n      color:#3080cf;\\n    }\\n    .content{\\n      padding-top: 300px;\\n    }\\n    \\n    \\n    \\n    .section{\\n      background: #cfcfcf url(https://s.okno.rs/img/whitepaperboard.png);\\n      color: #303030;\\n    }\\n    \\n    .container.hi-contrast .section {\\n      background: #303030;\\n      color: #cfcfcf;\\n    }\\n    .container.hi-contrast a {\\n      color: #cfcfcf;\\n    }\\n    .container.hi-contrast a:hover {\\n      color: #3080cf;\\n    }\\n    .container.hi-contrast .bttn {\\n      color: #cfcfcf;\\n      background: transparent;\\n      border-color: #cfcfcf;\\n    }\\n    .container.hi-contrast .bttn:hover {\\n      background: #cfcfcf;\\n      color: #888;\\n    }\\n    .container.hi-contrast input {\\n      color: #ffffff;\\n      border-color: #888;\\n    }\\n    \\n    \\n    section {\\n      position: relative;\\n      display: inline-block;\\n      float: left;\\n      padding: 3rem;\\n      box-sizing: border-box;\\n    }\\n    \\n    section h2 {\\n      margin-bottom: 1rem;\\n    }\\n    section .entry-content {\\n      line-height: 1.4;\\n    }\\n    section .entry-content p {\\n      margin: 0 0 14px;\\n    }\\n    section .entry-content a {\\n      font-weight: 400;\\n    }\\n    section .entry-content table {\\n      width: 100%;\\n    }\\n    section .entry-content td {\\n      font-weight: 300;\\n      border: 1px solid;\\n      padding: 10px;\\n    }\\n    section .entry-content th {\\n      font-weight: 700;\\n    }\\n    section .entry-content ul {\\n      padding: 10px 0 20px 40px;\\n      list-style-type: disc;\\n    }\\n    section .entry-content iframe {\\n      max-width: 100%;\\n    }\\n    section .entry-content img {\\n      max-width: 100%;\\n      height: auto;\\n    }\\n    \\n    \\n    h1, h2, h3, h4, h5, h6 {\\n      font-family: plan9regular, serif;\\n      margin: 0;\\n      font-weight: 400;\\n      line-height: 1.2;\\n    }\\n    \\n    \\n    \\n    \\n    main.main {\\n      min-height: 100vh;\\n      background-image: radial-gradient(ellipse at center, rgba(48,48,48,0.3) 0%, rgba(207,207,207,0.03) 80%);\\n    }\\n    \\n    \\n    \\n    .logobox{\\n      height: 128px;\\n      width: 128px;\\n    }\\n    .logobox.round{\\n      background-color: rgba(40,40,40,255);\\n      transition: background-color 9s linear;\\n      animation: logobg 9s linear infinite;\\n    }\\n    \\n    \\n    </style>"],"names":[],"mappings":"AA0CI,sCAAQ,CAAC,AACP,gBAAgB,CAAE,IAAI,+CAA+C,CAAC,CACtE,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,KAAK,CAAC,MAAM,CACjC,eAAe,CAAE,KAAK,AACxB,CAAC,AACD,qCAAO,CAAC,AACN,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,AACT,CAAC,AAcD,sCAAQ,CAAC,AACP,UAAU,CAAE,OAAO,CAAC,IAAI,yCAAyC,CAAC,CAClE,KAAK,CAAE,OAAO,AAChB,CAAC,AA2BD,OAAO,8BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,AACxB,CAAC,AAED,sBAAO,CAAC,EAAE,eAAC,CAAC,AACV,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,sBAAO,CAAC,cAAc,eAAC,CAAC,AACtB,WAAW,CAAE,GAAG,AAClB,CAAC,AA+BG,gCAAE,CAAM,EAAE,8BAAS,CAAC,AACtB,WAAW,CAAE,YAAY,CAAC,CAAC,KAAK,CAChC,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,GAAG,AAClB,CAAC"}`
  };
  var About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$1);
    return `${$$result.head += `<script async custom-element="${"amp-lightbox"}" src="${"https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"}" data-svelte="svelte-1kb1je8"><\/script>${$$result.title = `<title>About ParallelCoin - Plan 9 from Cryptospace</title>`, ""}<link rel="${"canonical"}" href="${"https://about.parallelcoin.info/"}" data-svelte="svelte-1kb1je8">`, ""}
      <!-- HTML_TAG_START -->${'<amp-state id="about" src="https://api.parallelcoin.io/about"></amp-state>'}<!-- HTML_TAG_END -->
  
<div class="${"flex flex-1 flex-col text-center text-light md:container md:mx-auto md:px-0"}">${validate_component(HeadTitle, "HeadTitle").$$render($$result, {}, {}, { default: () => `About ParallelCoin` })}
          <nav class="${"flex flex-col section bg-background-primary my-8 border-dashed border-2 border-black border-opacity-25 svelte-1t5iqny"}"><div class="${"flex flex-col vampira p-8 svelte-1t5iqny"}"><h4 class="${"pb-8 text-xl svelte-1t5iqny"}">Contents</h4>    
            <amp-list layout="${"fixed-height"}" width="${"auto"}" height="${"180"}" src="${"amp-state:about"}" reset-on-refresh items="${"pasus"}" binding="${"no"}"><!-- HTML_TAG_START -->${`<template type="amp-mustache">
            <a href="#" id="'nav-'+{'{{slug}}'}" on="tap:top.scrollTo(duration=200)" class="pb-2 text-xl">{{title}}</a>
            </template>`}<!-- HTML_TAG_END --></amp-list></div></nav>
          <amp-list layout="${"flex-item"}" src="${"amp-state:about"}" reset-on-refresh items="${"pasus"}" binding="${"no"}"><template type="${"amp-mustache"}"><section class="${"section my-8 bg-background-primary border-dashed border-2 border-black border-opacity-25 text-text-primary text-lg leading-relaxed svelte-1t5iqny"}"${add_attribute("id", "{{slug}}", 0)}><h2 class="${"text-3xl svelte-1t5iqny"}">${escape("{{title}}")}</h2>
            <div class="${"entry-content svelte-1t5iqny"}">${escape("{{{html}}}")}</div>
            <amp-img src="${"https://s.okno.rs/img/go/morning-coffee.gif"}" layout="${"responsive"}" width="${"100"}" height="${"100"}" class="${"gopher svelte-1t5iqny"}"></amp-img></section></template></amp-list>
            <!-- HTML_TAG_START -->${`<a href="#" id="end" class="my-0 mx-auto" on="tap:top.scrollTo(duration=200)"><amp-img src="https://s.okno.rs/img/go/unicorn.png" layout="responsive" width="100" height="100" class="inspector"></amp-img></a>`}<!-- HTML_TAG_END --></div>

<div></div>`;
  });
  var Log = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `${$$result.head += `<script async custom-element="${"amp-lightbox"}" src="${"https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"}" data-svelte="svelte-1k2lssy"><\/script>${$$result.title = `<title>ParallelCoin log - Plan 9 from Cryptospace</title>`, ""}<link rel="${"canonical"}" href="${"https://log.parallelcoin.info/"}" data-svelte="svelte-1k2lssy">`, ""}

  
  <div><!-- HTML_TAG_START -->${'<amp-state id="downloads" src="https://api.parallelcoin.io/downloads"></amp-state>'}<!-- HTML_TAG_END --></div>
<div class="${"flex flex-col text-center text-light parallelcoin"}"><h2 class="${"text-3xl text-center"}">ParallelCoin wallet application</h2></div>`;
  });
  var Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `${$$result.head += `<script async custom-element="${"amp-lightbox"}" src="${"https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"}" data-svelte="svelte-2bw1xr"><\/script>`, ""}

  
  <div><!-- HTML_TAG_START -->${'<amp-state id="downloads" src="https://api.parallelcoin.io/downloads"></amp-state>'}<!-- HTML_TAG_END --></div>
<div class="${"flex flex-col text-center text-light parallelcoin"}"><h2 class="${"text-3xl text-center"}">ParallelCoin wallet application</h2></div>`;
  });
  var Meme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `${$$result.head += `<script async custom-element="${"amp-lightbox"}" src="${"https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"}" data-svelte="svelte-2bw1xr"><\/script>`, ""}


<div><!-- HTML_TAG_START -->${'<amp-state id="downloads" src="https://api.parallelcoin.io/downloads"></amp-state>'}<!-- HTML_TAG_END --></div>
<div class="${"flex flex-col text-center text-light parallelcoin"}"><h2 class="${"text-3xl text-center"}">ParallelCoin wallet application</h2></div>`;
  });
  var css = {
    code: "@font-face{font-family:'bariollight';src:url('https://font.okno.rs/bariol/lightwoff2') format('woff2'),\n	url('https://font.okno.rs/bariol/light.woff') format('woff');font-weight:normal;font-style:normal}@font-face{font-family:'bariolregular';src:url('https://font.okno.rs/bariol/regular.woff2') format('woff2'),\n	url('https://font.okno.rs/bariol/regular.woff') format('woff');font-weight:normal;font-style:normal}@font-face{font-family:'bariolbold';src:url('https://font.okno.rs/bariol/bold.woff2') format('woff2'),\n	url('https://font.okno.rs/bariol/bold.woff') format('woff');font-weight:normal;font-style:normal}@font-face{font-family:'plan9regular';font-style:normal;font-display:swap;font-weight:400;src:local('plan9regular '),\n			local('plan9regular'),\n			url('https://font.okno.rs/plan9/regular.woff2') format('woff2'),\n			url('https://font.okno.rs/plan9/regular.woff') format('woff')}",
    map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n    import { getContext } from 'svelte';\\n\\n        import ParallelCoin from '$lib/sub/ParallelCoin.svelte';\\n        import WWW from '$lib/sub/WWW.svelte';\\n        import Download from '$lib/sub/Download.svelte';\\n        import Where from '$lib/sub/Where.svelte';\\n        import Legacy from '$lib/sub/Legacy.svelte';\\n        import Links from '$lib/sub/Links.svelte';\\n        import About from '$lib/sub/About.svelte';\\n        import Log from '$lib/sub/Log.svelte';\\n        import Faq from '$lib/sub/Faq.svelte';\\n        import Meme from '$lib/sub/Meme.svelte';\\n\\n        \\n    const sub = getContext('sub');\\n    \\n<\/script>\\n \\n{#if sub === \\"\\" || sub === \\"parallelcoin\\"}\\n<ParallelCoin></ParallelCoin>\\n{/if}\\n{#if sub === \\"www\\"}\\n<WWW></WWW>\\n{/if}\\n{#if sub === \\"where\\"}\\n<Where></Where>\\n{/if}\\n{#if sub === \\"legacy\\"}\\n<Legacy></Legacy>\\n{/if}\\n{#if sub === \\"download\\"}\\n<Download></Download>\\n{/if}\\n{#if sub === \\"links\\"}\\n<Links></Links>\\n{/if}\\n{#if sub === \\"log\\"}\\n<Log></Log>\\n{/if}\\n{#if sub === \\"faq\\"}\\n<Faq></Faq>\\n{/if}\\n{#if sub === \\"meme\\"}\\n<Meme></Meme>\\n{/if}\\n{#if sub === \\"about\\"}\\n<About></About>\\n{/if}\\n\\n\\n<style>\\n\\n\\n@font-face {\\n\\tfont-family: 'bariollight';\\n\\tsrc: url('https://font.okno.rs/bariol/lightwoff2') format('woff2'),\\n\\turl('https://font.okno.rs/bariol/light.woff') format('woff');\\n\\tfont-weight: normal;\\n\\tfont-style: normal;\\n}\\n@font-face {\\n\\tfont-family: 'bariolregular';\\n\\tsrc: url('https://font.okno.rs/bariol/regular.woff2') format('woff2'),\\n\\turl('https://font.okno.rs/bariol/regular.woff') format('woff');\\n\\tfont-weight: normal;\\n\\tfont-style: normal;\\n}\\n@font-face {\\n\\tfont-family: 'bariolbold';\\n\\tsrc: url('https://font.okno.rs/bariol/bold.woff2') format('woff2'),\\n\\turl('https://font.okno.rs/bariol/bold.woff') format('woff');\\n\\tfont-weight: normal;\\n\\tfont-style: normal;\\n}\\n@font-face {\\n\\tfont-family: 'plan9regular';\\n\\tfont-style: normal;\\n\\tfont-display: swap;\\n\\tfont-weight: 400;\\n\\tsrc:\\n\\t\\t\\tlocal('plan9regular '),\\n\\t\\t\\tlocal('plan9regular'),\\n\\t\\t\\turl('https://font.okno.rs/plan9/regular.woff2') format('woff2'),\\n\\t\\t\\turl('https://font.okno.rs/plan9/regular.woff') format('woff');\\n}\\n\\n</style>"],"names":[],"mappings":"AAsDA,UAAU,AAAC,CAAC,AACX,WAAW,CAAE,aAAa,CAC1B,GAAG,CAAE,IAAI,wCAAwC,CAAC,CAAC,OAAO,OAAO,CAAC,CAAC;CACnE,IAAI,wCAAwC,CAAC,CAAC,OAAO,MAAM,CAAC,CAC5D,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,AACnB,CAAC,AACD,UAAU,AAAC,CAAC,AACX,WAAW,CAAE,eAAe,CAC5B,GAAG,CAAE,IAAI,2CAA2C,CAAC,CAAC,OAAO,OAAO,CAAC,CAAC;CACtE,IAAI,0CAA0C,CAAC,CAAC,OAAO,MAAM,CAAC,CAC9D,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,AACnB,CAAC,AACD,UAAU,AAAC,CAAC,AACX,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,IAAI,wCAAwC,CAAC,CAAC,OAAO,OAAO,CAAC,CAAC;CACnE,IAAI,uCAAuC,CAAC,CAAC,OAAO,MAAM,CAAC,CAC3D,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,AACnB,CAAC,AACD,UAAU,AAAC,CAAC,AACX,WAAW,CAAE,cAAc,CAC3B,UAAU,CAAE,MAAM,CAClB,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,GAAG,CAChB,GAAG,CACD,MAAM,eAAe,CAAC,CAAC;GACvB,MAAM,cAAc,CAAC,CAAC;GACtB,IAAI,0CAA0C,CAAC,CAAC,OAAO,OAAO,CAAC,CAAC;GAChE,IAAI,yCAAyC,CAAC,CAAC,OAAO,MAAM,CAAC,AAChE,CAAC"}`
  };
  var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    const sub2 = getContext("sub");
    $$result.css.add(css);
    return `${sub2 === "" || sub2 === "parallelcoin" ? `${validate_component(ParallelCoin, "ParallelCoin").$$render($$result, {}, {}, {})}` : ``}
${sub2 === "www" ? `${validate_component(WWW, "WWW").$$render($$result, {}, {}, {})}` : ``}
${sub2 === "where" ? `${validate_component(Where, "Where").$$render($$result, {}, {}, {})}` : ``}
${sub2 === "legacy" ? `${validate_component(Legacy, "Legacy").$$render($$result, {}, {}, {})}` : ``}
${sub2 === "download" ? `${validate_component(Download, "Download").$$render($$result, {}, {}, {})}` : ``}
${sub2 === "links" ? `${validate_component(Links, "Links").$$render($$result, {}, {}, {})}` : ``}
${sub2 === "log" ? `${validate_component(Log, "Log").$$render($$result, {}, {}, {})}` : ``}
${sub2 === "faq" ? `${validate_component(Faq, "Faq").$$render($$result, {}, {}, {})}` : ``}
${sub2 === "meme" ? `${validate_component(Meme, "Meme").$$render($$result, {}, {}, {})}` : ``}
${sub2 === "about" ? `${validate_component(About, "About").$$render($$result, {}, {}, {})}` : ``}`;
  });
  var index = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": Routes
  });
  var U5B_partsu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
  });
  var ____parts_ = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": U5B_partsu5D
  });

  // .svelte-kit/cloudflare-workers/entry.js
  var import_kv_asset_handler = __toModule(require_dist());
  init();
  addEventListener("fetch", (event) => {
    event.respondWith(handle(event));
  });
  async function handle(event) {
    if (event.request.method == "GET") {
      try {
        return await (0, import_kv_asset_handler.getAssetFromKV)(event);
      } catch (e) {
        if (!(e instanceof import_kv_asset_handler.NotFoundError)) {
          return new Response("Error loading static asset:" + (e.message || e.toString()), {
            status: 500
          });
        }
      }
    }
    const request = event.request;
    const request_url = new URL(request.url);
    try {
      const rendered = await render({
        host: request_url.host,
        path: request_url.pathname,
        query: request_url.searchParams,
        rawBody: await read(request),
        headers: Object.fromEntries(request.headers),
        method: request.method
      });
      if (rendered) {
        return new Response(rendered.body, {
          status: rendered.status,
          headers: makeHeaders(rendered.headers)
        });
      }
    } catch (e) {
      return new Response("Error rendering route:" + (e.message || e.toString()), { status: 500 });
    }
    return new Response({
      status: 404,
      statusText: "Not Found"
    });
  }
  async function read(request) {
    return new Uint8Array(await request.arrayBuffer());
  }
  function makeHeaders(headers) {
    const result = new Headers();
    for (const header in headers) {
      const value = headers[header];
      if (typeof value === "string") {
        result.set(header, value);
        continue;
      }
      for (const sub2 of value) {
        result.append(header, sub2);
      }
    }
    return result;
  }
})();
