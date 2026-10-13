# Requisitos R17

AuthFrame tem children, brand, brandLabel, mobileLogo, formAriaLabel, topAction e footer opcional
como slots de composição. Nenhuma flag Student/Teacher, footerMode ou variante de largura. Brand
conteúdo/typografia e footer ficam nos produtos; shared ownership cobre somente a estrutura comum.
Mantém marcador semântico data-auth-scroll-panel usado pelo formulário Student para scroll.
Toasts ficam no adapter Student; nenhum store/context/router/Firebase na UI. Regiões e labels
preservados; action mobile/desktop segue a receita atual. Footer Teacher recebido por composição.

Afetadas: Student login, registration, payment-access e student-handoff em estados relevantes;
Teacher login/cadastro, incluindo telefone/OTP/form longo. CompleteRegistration é layout próprio
fora deste shell e não entra. Verificar empty top action, toast, overflow, focus, teclado, larguras
ambos lados de 640/1024 e viewport baixo 760. Não enviar OTP ou criar/cobrar entidades.
