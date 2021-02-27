(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,b=u["".concat(o,".").concat(p)]||u[p]||m[p]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(106)),o={id:"quickstart",title:"Quickstart",sidebar_label:"Quickstart"},s={unversionedId:"getting_started/quickstart",id:"getting_started/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"In this quickstart guide, we are going to train the M4C model on the TextVQA dataset. TextVQA requires models to read and reason about text in images to answer questions about them. M4C is a recent SOTA model on TextVQA which consists of a multimodal transformer architecture accompanied by a rich representation for text in images.",source:"@site/docs/getting_started/quickstart.md",slug:"/getting_started/quickstart",permalink:"/docs/getting_started/quickstart",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/getting_started/quickstart.md",version:"current",lastUpdatedBy:"Amanpreet Singh",lastUpdatedAt:1597441670,sidebar_label:"Quickstart",sidebar:"docs",previous:{title:"MMF Features",permalink:"/docs/getting_started/features"},next:{title:"Video overview",permalink:"/docs/getting_started/video_overview"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Getting Data",id:"getting-data",children:[]},{value:"Training",id:"training",children:[]},{value:"Inference",id:"inference",children:[]},{value:"Citation",id:"citation",children:[]},{value:"Next steps",id:"next-steps",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this quickstart guide, we are going to train the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/tree/master/projects/m4c"},"M4C")," model on the TextVQA dataset. TextVQA requires models to read and reason about text in images to answer questions about them. ",Object(i.b)("inlineCode",{parentName:"p"},"M4C")," is a recent SOTA model on TextVQA which consists of a multimodal transformer architecture accompanied by a rich representation for text in images."),Object(i.b)("p",null,"To train other models or understand more about MMF, follow Next Steps at the bottom of this tutorial."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Install MMF following the ",Object(i.b)("a",{parentName:"p",href:"https://mmf.sh/docs/getting_started/installation"},"installation documentation"),"."),Object(i.b)("h2",{id:"getting-data"},"Getting Data"),Object(i.b)("p",null,"Datasets and required files will be downloaded automatically when we run training. For more details about custom datasets and other advanced setups for datasets check the ",Object(i.b)("a",{parentName:"p",href:"https://mmf.sh/docs/tutorials/dataset"},"dataset documentation"),"."),Object(i.b)("h2",{id:"training"},"Training"),Object(i.b)("p",null,"We can start training by running the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mmf_run config=projects/m4c/configs/textvqa/defaults.yaml \\\n    datasets=textvqa \\\n    model=m4c \\\n    run_type=train_val\n")),Object(i.b)("p",null,"The hyperparameters for training and for the experiment are in the experiment config ",Object(i.b)("inlineCode",{parentName:"p"},"projects/m4c/configs/textvqa/defaults.yaml"),". We can also set config params using command line args:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mmf_run config=projects/m4c/configs/textvqa/defaults.yaml \\\n    datasets=textvqa \\\n    model=m4c \\\n    run_type=train_val \\\n    training.batch_size=32 \\\n    training.max_updates=44000 \\\n")),Object(i.b)("p",null,"where ",Object(i.b)("inlineCode",{parentName:"p"},"training.batch_size=32")," will set batch size to 32 and ",Object(i.b)("inlineCode",{parentName:"p"},"training.max_updates=44000")," will set max iterations to 44000 for the training."),Object(i.b)("p",null,"Similarly, log interval, checkpoint interval and validation interval can all be set as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mmf_run config=projects/m4c/configs/textvqa/defaults.yaml \\\n    datasets=textvqa \\\n    model=m4c \\\n    run_type=train_val \\\n    training.batch_size=32 \\\n    training.max_updates=44000 \\\n    training.log_interval=10 \\\n    training.checkpoint_interval=100 \\\n    training.evaluation_interval=1000\n")),Object(i.b)("p",null,"This will show training logs every 10 iterations, checkpoint models every 100 iterations and run validation every 1000 iterations. More about configurations and how we set them can be found ",Object(i.b)("a",{parentName:"p",href:"https://mmf.sh/docs/notes/configuration"},"here"),"."),Object(i.b)("h2",{id:"inference"},"Inference"),Object(i.b)("p",null,"For running inference or generating predictions, we can specify a pretrained model using its zoo key and then run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mmf_predict config=projects/m4c/configs/textvqa/defaults.yaml \\\n    datasets=textvqa \\\n    model=m4c \\\n    run_type=test \\\n    checkpoint.resume_zoo=m4c.textvqa.defaults\n")),Object(i.b)("p",null,"For running inference on the ",Object(i.b)("inlineCode",{parentName:"p"},"val")," set, use ",Object(i.b)("inlineCode",{parentName:"p"},"run_type=val")," and rest of the arguments stay the same. ",Object(i.b)("inlineCode",{parentName:"p"},"checkpoint.resume_zoo")," is loading a pretrained model from model zoo. To learn more about checkpoints and pretraining/finetuning models check this ",Object(i.b)("a",{parentName:"p",href:"https://mmf.sh/docs/tutorials/checkpointing"},"tutorial"),"."),Object(i.b)("p",null,"These commands should be enough to get you started with training and performing inference using MMF."),Object(i.b)("h2",{id:"citation"},"Citation"),Object(i.b)("p",null,"If you use MMF in your work or use any models published in MMF, please cite:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"@misc{singh2020mmf,\n  author =       {Singh, Amanpreet and Goswami, Vedanuj and Natarajan, Vivek and Jiang, Yu and Chen, Xinlei and Shah, Meet and\n                 Rohrbach, Marcus and Batra, Dhruv and Parikh, Devi},\n  title =        {MMF: A multimodal framework for vision and language research},\n  howpublished = {\\url{https://github.com/facebookresearch/mmf}},\n  year =         {2020}\n}\n")),Object(i.b)("h2",{id:"next-steps"},"Next steps"),Object(i.b)("p",null,"To dive deeper into MMF, explore the following topics next:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mmf.sh/docs/notes/concepts"},"Concepts and Terminology")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mmf.sh/docs/notes/model_zoo"},"Model Zoo of MMF")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mmf.sh/docs/notes/dataset_zoo"},"Dataset Zoo of MMF")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mmf.sh/docs/notes/projects"},"Projects available in MMF")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mmf.sh/docs/getting_started/faqs"},"FAQs"))))}d.isMDXComponent=!0}}]);