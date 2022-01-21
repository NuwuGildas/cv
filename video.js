// set default language and update language toggle if default lang exist 
if(typeof localStorage.getItem("language") != 'string'){
      localStorage.setItem("language","en");    
}else{
      if(localStorage.getItem("language") == 'en'){
            document.querySelector('.slider-cradle').classList.remove('is-transitioned');
      }else{
            document.querySelector('.slider-cradle').classList.add('is-transitioned');
      }
      
}

let observer = new IntersectionObserver(
      (entries) => { 
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  console.log('appear');

                  console.log('width:'+entry.target.querySelector('.indicator').getAttribute('data')+'%;')
                  entry.target.querySelector('.indicator').style = 'width:'+entry.target.querySelector('.indicator').getAttribute('data')+'%;';
                  observer.unobserve(entry.target);
                }
            });
      }, 
      {
            threshold: [0.01]
      }
);
document.querySelectorAll('.skill_inf').forEach((elt) => {
      observer.observe(elt);
});
document.querySelectorAll('.languageInf').forEach((elt) => {
      observer.observe(elt);
});
window.addEventListener('scroll', e => {
      var el = document.getElementById('jsScroll');
      if(window.scrollY > 200) {
            el.classList.add('visible');
      } else {
            el.classList.remove('visible');
      }
});

function scrollToTop(el) {
      el.classList.add('animate_scroll_btn');

      window.scrollTo({
            top: 0,
            behavior: 'smooth'
      });
      setTimeout(()=>{
            el.classList.remove('animate_scroll_btn');
      },400)
}

let engVersion = {
      "title_experience":"MY EXPERIENCES",
      "job_stroll"      :"Senior Full Stack  Developer",
      "experiences"     :[
                              'Put in place and managed video streaming system on the furthermarket platform, using various technologies such as HLS, DASH for the video streaming',
                              'I have built a video and audio calling System using WebRTC, between Furthermarket Users, we had to put in place a TURN and STUN server for the transfer of streams for users behind a NAT',
                              'I have built the documentation website for the Further Market lscript Langouage using Laravel <a class="link" href="http://developer.furthermarket.com" target="_blank" rel="noopener noreferrer">link</a>',
                              'I was also in charge of the publication of the iOS app on the app store and also the control, update and modification of various cordova plugins for iOS in order to sweet the company needs',
                              'I was also in charge of implementing a websocket system for the real time transfer of in app notifications and also instantaneous chat messages transfer between users using the in house script language FMScript'

                        ],
      "title_pLang"     :"Programming Languages and Programming Technologies",
      "post"            :"FULL STACK DEVELOPER",
      "title_profile"   :"MY PROFILE",
      "profile"         :"Full Stack Mobile and Web Developer with more than 4 years of experience In building highly efficient mobile and web applications both front end and back end. I am professional, motivated and endowed with a good team spirit and a great sense of organization and communication.I am always keen to learn, to take on more responsibility and to grow professionally",
      "title_educ"      :"EDUCATION BACKGROUND",
      "degree"          :"Network and Telecommunication Degree",
      "hnd"             :"HND in Industrial Computing",
      "gce"             :"GCE Advanced Level",
      "languages"       :"Languages",
      "content"         :"Thanks for the visit ☺️ this website was completely realised with <h2>HTML, CSS, JavaSCript</h2><br>see you soon on my next projects 🙌🏾 "
}
let frVersion = {
      "title_experience":"MES EXPÉRIENCES",
      "job_stroll"      :"Développeur Full Stack Sénior",
      "experiences"     :[
                              'Mettre en place et gérer un système de streaming vidéo sur la plate-forme de Further Market, en utilisant diverses technologies telles que HLS, DASH pour le streaming vidéo',
                              'Nous avons construit un système d\'appel vidéo et audio en utilisant WebRTC, entre les utilisateurs de Furthermarket, nous avons dû mettre en place un serveur TURN et STUN pour le transfert de flux entre les utilisateurs derrière un NAT',
                              'Nous avons construit le site Web de documentation pour le langage FMScript de Further Market en utilisant Laravel <a class="link" href="http://developer.furthermarket.com" target="_blank" rel="noopener noreferrer">lien</a>',
                              'J\'étais également en charge de la publication de l\'application iOS sur l\'App Store ainsi que du contrôle, de la mise à jour et de la modification de divers plugins Cordova pour iOS afin de répondre aux besoins de l\'entreprise.',
                              'J\'étais également en charge de la mise en place d\'un système de websocket pour le transfert en temps réel des notifications dans l\'application et également le transfert instantané de messages de chat entre les utilisateurs en utilisant le langage de script maison FMScript'

                        ],
      "title_pLang"     :"Langages de programmation et technologies de programmation",
      "post"            :"DÉVELOPPEUR FULL STACK",
      "title_profile"   :"MON PROFIL",
      "profile"         :"Développeur Full Stack Mobile et Web avec plus de 4 ans d'expérience dans la création d'applications mobiles et Web hautement efficaces, à la fois front-end et back-end. Je suis professionnel, motivé et doté d'un bon esprit d'équipe et d'un grand sens de l'organisation et de la communication. Je suis toujours désireux d'apprendre, de prendre plus de responsabilités et d'évoluer professionnellement",
      "title_educ"      :"PARCOURS SCOLAIRE",
      "degree"          :"Licence Réseaux et Télécommunications",
      "hnd"             :"BTS en informatique industrielle",
      "gce"             :"GCE Advanced Level",
      "languages"       :"Langues",
      "content"         :"Merci pour votre visite ☺️ ce site web a été entièrement réalisé avec <h2>HTML, CSS, JavaSCript</h2><br>à bientôt sur mes prochains projets 🙌🏾 "  
}

translate();

function translate() {
      let JSONobj;
      if(localStorage.getItem("language") == 'en'){
            JSONobj = engVersion;
      }else{
            JSONobj = frVersion;
      }
      for (var key in JSONobj) {
            switch(key){
                  case 'experiences':
                        let str = "";
                        JSONobj[key].forEach((elt)=>{
                              str += '<li>'+elt+'</li>';
                        });
                        document.getElementById(key).innerHTML = str;
                  break;
                  case 'content':
                        document.getElementById(key).innerHTML = JSONobj[key];
                  break;
                  default :
                        document.getElementById(key).innerText = JSONobj[key];
                  break;
            }
      }
      
}
function showPopup(){
      document.getElementById('popup1').classList.toggle('showOverlay');
      document.getElementById('info').classList.toggle('info');
}
document.querySelector('.slider-cradle').onclick = (e)=>{
      console.log(e.target.parentNode.classList.contains('is-transitioned'));

      document.querySelector('.slider-cradle').classList.toggle('is-transitioned');
      if(!e.target.parentNode.classList.contains('is-transitioned')){
            localStorage.setItem("language","en");
      }else{
            localStorage.setItem("language","fr");
      }
      translate();
};
