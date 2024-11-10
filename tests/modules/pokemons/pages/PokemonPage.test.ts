import { mount, RouterLinkStub } from "@vue/test-utils";
import PokemonPage from '@/modules/pokemons/page/PokemonPage.vue';

describe('PokemonPage', () => {

    const wrapper = mount(PokemonPage, {
        props: {
            id: 25,
        },
        global: {
            stubs: {
                RouterLink: RouterLinkStub,
            }
        }
    });

    test('should render the PokemonPage correctly', () => {
        expect(wrapper.find('h1').text()).toBe('Pokémon #25');
    });

    // test('should redirect to next pokemon', async () => {
    //     const link = wrapper.findComponent({ name: 'RouterLink' });

    //     console.log(link.props());

    //     // expect(link.props().to).toEqual({
    //     //     name: 'pokemon',
    //     //     params: { id: '26' }
    //     // })
    // });
});