import BlogComponent from "../components/Blog/BlogComponent";

export default {
    title: 'App/Blog',
    component: BlogComponent
}

const Template = args => <BlogComponent />

// New instance of component
export const Default = Template.bind({})
