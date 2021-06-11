import Button from "../Button/Button";
import InputFieldComponent from "../Form/InputField";
import TextAreaComponent from "../Form/TextAreaField";

function ContactComponent() {
    const emailType = {
        type: 'email',
        placeholder: 'Your Email Please',
        id: 'username',
        name: 'username'
    }

    const nameType = {
        type: 'text',
        placeholder: 'Your Full Name Please',
        id: 'full-name',
        name: 'fullname'
    }

    const messageType = {
        type: 'text',
        placeholder: 'Type your message here...',
        id: 'message',
        name: 'message',
        rows: 5
    }

    const button = [
        'med', '123'
    ]

    return(
        <div className={`w-1/2 mx-auto mt-10 my-auto`}>
            <form action='#' className={`bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 mt-4`}
                  onSubmit={submitContactMessage}>
                <div id="login-box" className={`text-center mb-4`}>
                    <span className={`mx-auto`}>
                        Mail me directly at
                        <span className={`text-cyan-600 underline ml-1 mr-1 font-medium`}>
                            <a href={`mailto:kukreti.ashutosh@gmail.com`}>kukreti.ashutosh@gmail.com </a>
                        </span>
                        or submit your message via
                    </span>
                    <div id="login-box-caption" className={`font-bold text-2xl text-cyan-500`}>Contact Me Form</div>

                </div>
                <div className={`mb-3 mt-10`}>
                    <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="username">
                        Your Email ID
                    </label>
                    <InputFieldComponent type={ emailType } />
                    <div id={`username-required`} className={`text-red-500 italic text-sm mt-1`}/>
                </div>

                <div className={`mb-3 mt-10`}>
                    <label className={`block text-gray-700 text-sm font-bold mb-2`} htmlFor="message">
                        Your Full Name
                    </label>
                    <InputFieldComponent type={ nameType } />
                    <div id={`fullname-required`} className={`text-red-500 italic text-sm mt-1`}/>
                </div>

                <div className={`mb-3 mt-10`}>
                    <TextAreaComponent type={ messageType } />
                    <div id={`message-required`} className={`text-red-500 italic text-sm mt-1`}/>
                </div>

                <div className={`mb-3 mt-10`}>
                    <Button size={button} children={<span>Submit</span>} />
                </div>

                <div id={`message-success`} className={`text-green-500 italic text-sm mt-1`}/>

            </form>
        </div>
    )
}

function submitContactMessage(event) {
    event.preventDefault()

    const userEmail = event.target.username.value
    const userFullName = event.target.fullname.value
    const userMessage = event.target.message.value

    if (!userEmail) {
        document.getElementById('username-required').innerHTML = 'Email Id is required'
    }
    if (!userFullName) {
        document.getElementById('fullname-required').innerHTML = 'Full Name is required'
    }
    if (!userMessage) {
        document.getElementById('message-required').innerHTML = 'Message is required'
        return
    }

    document.getElementById('message-success').innerHTML =
        'Thanks you for contacting me. I\'ll soon be in touch with you.'
}

export default ContactComponent