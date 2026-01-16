import {test} from "../fixtures/hooks-fixtures"

test.skip ("tmp test", async({page, loginPage})=> {
    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);


    await loginPage.gotoOrangeHrm();
    await loginPage.loginOrangeHrm('Admin', 'Admin123');

})

test.beforeEach('before each hook', async ({loginPage})=>{
    await loginPage.gotoOrangeHrm();
})

test.afterEach('after each hook', async ({userPage})=>{
    await userPage.logout();
}
)





