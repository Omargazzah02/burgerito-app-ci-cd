const axios = require ('axios');

describe('Tester les APIS', () => {
it('Retourner liste des produits' , async () => {
 const res = await axios.get('https://node-eemi.vercel.app/api/products');
 expect(res.status).toBe(200);
 expect(Array.isArray(res.data.items)).toBe(true);
}
)

it ('Tester Login' , async () => {
   const res = await axios.post('https://node-eemi.vercel.app/api/auth/login', {
      email: 'exemple@gmail.com',
      password: 'password'
    });
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('token');
} 
)

})