import CategoriesComponent from "../components/Categories/CategoriesComponent";

export default {
    title: 'App/Categories',
    component: CategoriesComponent
}

const Template = args => <CategoriesComponent />

// New instance of component
 export const Default = Template.bind({})
