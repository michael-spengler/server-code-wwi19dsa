import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'

const result = await Request.get('http://api.open-notify.org/iss-now.json')

console.log(result)