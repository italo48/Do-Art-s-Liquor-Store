$(function () {
  $("#tabs").tabs();
});

for (let i = 1; i <= 7; ++i) {
  $(`#content-${i}`).hide();
  $(`#carregar_mais${i}`).click(function () {
    $(`#content-${i}`).show();
    $(`#carregar_mais${i}`).hide();
  });  
}