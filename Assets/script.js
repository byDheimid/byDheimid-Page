
//-> ESTA FUNCIÓN RECORRE TODOS LOS BOTONES Y ESCUCHA CUANDO PRESIONAMOS UNO DE ELLOS.
function SearchButtons()
{
    const buttons = document.querySelectorAll('.NBButton');

    //-> RECORREMOS LOS BOTONES.
    buttons.forEach(button => 
    {
        //-> DETECTAMOS EL CLICK EN EL BOTÓN.
        button.addEventListener('click', () => 
        {
            buttons.forEach(btn => btn.classList.remove('active')); //<- DESACTIVAMOS LOS BOTONES ACTIVADOS.
            button.classList.add('active');  //<- ACTIVAMOS EL BOTÓN SELECCIONADO.
        }); 
    });
}
SearchButtons();

//-> ESTA FUNCIÓN NOS LLEVA A LA PÁGINA DE SECOND FLOOR AL PULSAR SU TARJETA (DIV)
function GoToSecondFloorPage()
{
    const div = document.querySelector('#SecondFloorCard');

    div.addEventListener('click', () =>
    {
        window.location.href = "https://bydheimid.itch.io/second-floor"; // ← Cambiá a la URL deseada
    });
}
GoToSecondFloorPage();

//-> ESTA FUNCIÓN CALCULA LA DISTANCIA QUE HAY ENTRE EL MOUSE Y EL DIV CONTENEDOR DE LOS BOTONES.
function MouseDistance()
{
    document.addEventListener("mousemove", (event) => 
    {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const div = document.getElementById("NavBarButtons");
        const rect = div.getBoundingClientRect();

        let distancia = 0;

        if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom)
        {
            distancia = 0;
        } 
        else 
        {
            const dx = Math.max(rect.left - mouseX, 0, mouseX - rect.right);
            const dy = Math.max(rect.top - mouseY, 0, mouseY - rect.bottom);
            distancia = Math.sqrt(dx * dx + dy * dy);
        }

        DistanteToDivEvent(distancia);
        console.log("Distancia al borde del div:", distancia.toFixed(2));
    });
}

function DistanteToDivEvent(distancia)
{
    const img = document.getElementById("circle"); // Reemplaza por tu ID real

    const tamaño = mapRange(distancia, 0, 800, 20, 0); // Invertido a propósito

    img.style.width = tamaño + "px";
    img.style.height = tamaño + "px";
}

function mapRange(value, inMin, inMax, outMin, outMax) 
{
    // Clamp para mantener el valor dentro del rango de entrada
    value = Math.max(inMin, Math.min(value, inMax));
  
    return outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
}

MouseDistance();

function DetectFunctionsOfButtons()
{
    //-> GUARDAMOS LOS BOTONES.
    const AMBtn = document.querySelector('#AMBtn');
    const PFBtn = document.querySelector('#PFBtn');
    const CVBtn = document.querySelector('#CVBtn');

    //-> GUARDAMOS LOS DIVS.
    const AMDiv = document.querySelector('#AboutMeInformation')
    const PFDiv = document.querySelector('#PortfolioInformation')
    // const CVDiv = document.querySelector('#ola')

    AMBtn.addEventListener('click', () =>
    {
        AMDiv.style.opacity = "1";
        PFDiv.style.opacity = "0";
    });

    PFBtn.addEventListener('click', () =>
    {
        PFDiv.style.opacity = "1";
        AMDiv.style.opacity = "0";
    });
}

DetectFunctionsOfButtons();

function OpenPage()
{
    document.getElementById("CortainButton").addEventListener("click", () => 
    {
        const Top = document.querySelector('#Top');
        const Bottom = document.querySelector('#Bottom');
        const Button = document.querySelector('#CortainButton');
    
        Top.style.transform = "translateY(-100%)";
        Bottom.style.transform = "translateY(100%)";
        Button.style.display = "none";

        setTimeout(() =>
        {
            document.querySelector('#AMBtn').click();

        }, 500);
        
    });
}

OpenPage();
