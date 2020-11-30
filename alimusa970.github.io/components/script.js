console.log('Its Working')

Let ; themes = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
} else {
    setTheme(theme)
}

Let ; themeDots =  document.getElementsByClassName('theme-dot');

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addeventListener('click', function(){
        Let ;mode = this.dataset.mode
         console.log('Option clicked')
    })
    function setThemes(){
        if(mode == 'light'){
            document.getElementById('themse-style').href = 'default.css'
        }

        if(mode == 'blue'){
            document.getElementById('theme-style').href = 'blue.css'
        }

        if(mode == 'green'){
            document.getElementById('theme-style').href = 'green.css'
        }

        if(mode == 'purple'){
            document.getElementById('theme-style').href = 'purple.css'
        }

        localStorage.setItem('theme', mode)
    }
}