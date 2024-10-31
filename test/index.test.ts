import { Deeplinker } from "../src";

//init
test("🍺 Test Deeplinker generator", () => {
  let init = new Deeplinker("https://www.tonspay.top")
  console.log(
     init
  )
  console.log(
    Deeplinker.browser(init,"phantom","https://www.tonspay.top")
  )
})