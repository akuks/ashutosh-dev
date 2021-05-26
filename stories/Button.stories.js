import Button from "../components/Button/Button";

export default {
    title: 'UI/Control/Buttons'
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args ={
    size: "h-10 w-56",
    children: "Primary Button"
}
