var $form = $("#formulario"),
    $titulo = $("#titulo"),
    $url = $("#url"),
    $button = $("#mostrar-form"),
    $list = $("#contenido"),
    $post =$(".item").first();

if (localStorage.getItem("autosave"))
{
	$titulo.val(sessionStorage.getItem("titulo"));
	$url.val(sessionStorage.getItem("url"));
}

var id = setInterval(function()
{
	sessionStorage.getItem("titulo", $titulo.val());
	sessionStorage.getItem("url", $url.val);
}, 1000);
function mostrarOcultarFormulario()
{
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function agregarPost()
{
	var url = $url.val(),
	          titulo = $titulo.val(),
	          $clone = $post.clone();

	$clone.find(".titulo_item a")
	     .text(titulo)
	     .attr("href", url)
	
	$clone.hide();

	$list.prepend($clone);
	mostrarOcultarFormulario();
	$titulo.val("");
	$url.val("");
	$clone.fadeIn();
	return false;
}

//Eventos
$button.click(mostrarOcultarFormulario);
$form.on("submit", agregarPost);