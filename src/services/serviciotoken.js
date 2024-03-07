//1. URL
let url="https://accounts.spotify.com/api/token"

//2. CONFIGURA LA PETICION
let grantType="grant_type=client_credentials"
let clientId="client_id=dd2689659ba94f02a298d48ac320a68a"
let clientSecret="client_secret=cabd8833e0144d25bfd99921bef5576f"

let datosBody=grantType+'&'+clientId+'&'+clientSecret

//3. EJECUTE EL CONSUMO A TRAVES DEL FETCH
let peticion={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:datosBody
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})//Todo ok
.then(function(respuesta){
    let token=respuesta.token_type+" "+respuesta.access_token
    let urlCanciones="https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X/top-tracks?market=US"

    let peticionCanciones={
        method:"GET",
        headers:{
            Authorization:token
        }
    }

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[0].name)
        console.log(respuesta.tracks[0].preview_url)
        console.log(respuesta.tracks[0].album.images[0].url)

        let titulo1=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[0].name

        let imagen1=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[0].album.images[0].url

        let audio1=document.getElementById("audio1")
        audio1.src=respuesta.tracks[0].preview_url


        console.log(respuesta.tracks[1].name)
        console.log(respuesta.tracks[1].preview_url)
        console.log(respuesta.tracks[1].album.images[1].url)

        let titulo2=document.getElementById("titulo2")
        titulo2.textContent=respuesta.tracks[1].name

        let imagen2=document.getElementById("imagen2")
        imagen2.src=respuesta.tracks[1].album.images[1].url

        let audio2=document.getElementById("audio2")
        audio2.src=respuesta.tracks[1].preview_url

        
        console.log(respuesta.tracks[2].name)
        console.log(respuesta.tracks[2].preview_url)
        console.log(respuesta.tracks[2].album.images[2].url)

        let titulo3=document.getElementById("titulo3")
        titulo3.textContent=respuesta.tracks[2].name

        let imagen3=document.getElementById("imagen3")
        imagen3.src=respuesta.tracks[2].album.images[2].url

        let audio3=document.getElementById("audio3")
        audio3.src=respuesta.tracks[2].preview_url

        
        console.log(respuesta.tracks[3].name)
        console.log(respuesta.tracks[3].preview_url)
        console.log(respuesta.tracks[3].album.images[3].url)

        let titulo4=document.getElementById("titulo4")
        titulo4.textContent=respuesta.tracks[3].name

        let imagen4=document.getElementById("imagen4")
        imagen4.src=respuesta.tracks[3].album.images[3].url

        let audio4=document.getElementById("audio4")
        audio4.src=respuesta.tracks[3].preview_url

        

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

})
.catch(function(respuesta){
    console.log(respuesta)
})//Fallaste

