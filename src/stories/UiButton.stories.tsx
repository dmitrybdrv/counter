import {Button} from "../Componens/Button/Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Button',
    component: Button,
    argsTypes: {
        variant: {control: 'radio'}
    }

} as ComponentMeta<typeof Button>;

const Story: ComponentStory<typeof Button> = (args) => <Button  {...args} />

export const DarkMode: ComponentStory<typeof Button> = Story.bind({})
DarkMode.storyName = 'Dark mode Button'
DarkMode.args = {
    label: 'Button',
    variant: true,
    callBack: action('callBack'),
    disabled: false,
}

export const LightMode: ComponentStory<typeof Button> = Story.bind({})
LightMode.storyName = 'Light mode Button'
LightMode.args = {
    label: 'Button',
    variant: false,
    callBack: action('callBack'),
    disabled: false,
}


export const EmojiMode: ComponentStory<typeof Button> = Story.bind({});
EmojiMode.storyName = 'Button with emoji'
EmojiMode.args = {
    label: '👍',
    variant: true,
    callBack: action('callBack'),
    disabled: false
}
