import { shallow } from "enzyme";
import App from "./App";
import { Message } from "./Messages";
import { NOTHING_TO_COPY } from './messageText';


describe("Start view App", () => {
    const wrapper = shallow(<App />);

    it("Should have h1 tag", () => {
        expect(wrapper.find('h1').text()).toBe("Password Generator");
    });

    it("Should have empty password", () => {
        expect(wrapper.find('#password').text()).toBe("");
    });

    it("Should have password length 10", () => {
        expect(wrapper.find('.passwordLengthValue').text()).toBe('10');
    });

    it("Should have 4 checkbox", () => {
        expect(wrapper.find('.checkbox')).toHaveLength(4);
    });

    it("Should have generate button", () => {
        const but = wrapper.find('.generate-btn');
        expect(but).not.toBe(undefined);
        expect(but.text()).toBe('Generate Password');
    });

    it("Should have copy button", () => {
        const but = wrapper.find('.copy-btn');
        expect(but).not.toBe(undefined);
        expect(but.text()).toBe('Copy');
    });

});

describe("Message component", () => {

    it("Should have empty message", () => {
        const mes = shallow(<Message textMessage />);
        expect(mes.find('p').text()).toBe('');
    });

    it("Should have message", () => {
        const mes = shallow(<Message textMessage={NOTHING_TO_COPY} />);
        expect(mes.find('p').text()).toBe(NOTHING_TO_COPY);
    });
})