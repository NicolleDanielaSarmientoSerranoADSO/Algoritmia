addEventListener("DOMContentLoaded", (e) =>{
    let form=document.querySelector("#form")
    form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let ingredientes= data.ingredientes
    let cantidad= (data.kg)
    let tabla=document.querySelector("tbody");
    tabla.insertAdjacentHTML("beforeend",`
        <tr>  <td> ${ingredientes}  </td>
        <td> ${cantidad} </td>
    </tr>
    `)

})
})