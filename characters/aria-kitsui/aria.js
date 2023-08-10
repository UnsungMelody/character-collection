/* Console */
let skipped = false

let terminal_text = document.getElementById("terminal_console")

let c_a_index = 0

let c_a = window.setInterval(function() {
    let input = "cd /documents/applications/"
    
    if (input[c_a_index] == undefined) clearInterval(c_a)
    else terminal_text.innerHTML += input[c_a_index]

    c_a_index++
}, 50)

window.setTimeout(function() {
    terminal_text.innerHTML += `<br><span id="green_console">admin@affairs-scp</span>:<span id="blue_console">/documents/applications/</span>$ `

    window.setTimeout(function() {
        let c_b_index = 0
        let c_b = window.setInterval(function() {
            let input = "sudo open application 27072023-9A"
            
            if (input[c_b_index] == undefined) clearInterval(c_b)
            else terminal_text.innerHTML += input[c_b_index]
        
            c_b_index++
        }, 50)

        window.setTimeout(function() {
            terminal_text.innerHTML += "<br>[sudo] Password for [REDACTED]: "
        
            window.setTimeout(function() {
                terminal_text.innerHTML += "<br><br>Access Granted..."

                terminal_text.innerHTML += "<br><br>Loading file..."

                window.setTimeout(function() {
                    terminal_text.innerHTML += "<br><br>Opening file..."

                    window.setTimeout(function() {
                        terminal_text.innerHTML = ""
                        terminal_text.innerHTML += "---<br>"
                        
                        let c_c_index = 0
                        let c_c = window.setInterval(function() {
                            let input = "Message from [REDACTED]"
                            
                            if (input[c_c_index] == undefined) clearInterval(c_c)
                            else terminal_text.innerHTML += input[c_c_index]
                        
                            c_c_index++
                        }, 50)

                        window.setTimeout(function() {
                            terminal_text.innerHTML += "<br>---<br>Good day madam,<br><br>I hope you are doing well. We have received the results of the required examinations and have conducted a thorough background check to your history and previous experiences.<br><br>You may prove to be useful to us.<br><br>Attached to this email is an application form. Kindly fill in the required information and get back to us soon. If everything bodes well, we hope to see you by next week.<br><br>Secure, Contain, Protect.<br>[REDACTED]"

                            window.setTimeout(function() {
                                hideTerminal()
                            }, 5000)
                        }, 1500)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2100)
    }, 200)
}, 2000)

/* Skip terminal sequence */
let loading_container = document.getElementById('loading_container')
let content_container = document.getElementById('content_container')
let close_terminal = document.getElementById('close_terminal')

close_terminal.onclick = function() { hideTerminal() }

/* hide terminal */
function hideTerminal() {
    if (skipped == true) {
        return
    }

    skipped = true

    loading_container.style.display = "none"
    content_container.style.display = "flex"
}

//DEBUG
hideTerminal()

/* ========== Main content ========== */

// randomizer
const title = document.getElementById('character_title')
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 

setInterval(() => {
    let title_iteration = 0

    const title_interval = setInterval(() => {
        title.innerText = title.innerText.split("")
            .map((letter, index) => {
                if (index < title_iteration) {
                    return title.dataset.value[index]
                }

                if (letter == " ") return " "

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("")
    
        if (title_iteration >= title.dataset.value.length) clearInterval(title_interval)
        title_iteration += 1 / 2
    }, 50)
}, 5000)


let page_buttons = document.getElementsByClassName("page_button")
let active = "overview"
for (let i = 0; i < page_buttons.length; i++) 
{
    page_buttons[i].onclick = function() {
        let page = this.dataset.page

        if (page == active) return

        let activate = document.querySelectorAll(`[data-page="${page}"]`)
        for (let x = 0; x < activate.length; x++) activate[x].dataset.active = "true"

        let deactivate = document.querySelectorAll(`[data-page="${active}"]`)
        for (let x = 0; x < deactivate.length; x++) deactivate[x].dataset.active = "false"

        active = this.dataset.page
    }
}