import HeaderComponent from "../components/Header/HeaderComponent";

export default {
    title: 'App/AppHeader',
    component: HeaderComponent
}

const Template = args => <HeaderComponent />

// New instance of component
 export const Default = Template.bind({})
