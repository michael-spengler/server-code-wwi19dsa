import { opine } from "https://deno.land/x/opine@0.27.0/mod.ts";

const app = opine();

app.get("/getIndividualGreeting/target/:target", function(req, res) {
    const ourGreetingTarget = req.params.target
  res.send(`Hello ${ourGreetingTarget}`);
});

app.listen(3000);