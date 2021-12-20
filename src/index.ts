import {App} from './app';

const main = async() => {
    const app = await new App(3000);

    await app.listen();
}

main();