//Espanõl
$(function() {
    $(".es").click(function() {
        //encabezamiento
        $(".nav-item").children().eq(0).text("PERFIL PROFESIONAL");
        $(".nav-item").children().eq(1).text("EXPERIENCIA");
        $(".nav-item").children().eq(2).text("Comprar");
        $(".nav-item").children().eq(3).text("Entra");
        $(".lang").children().eq(0).text("Español");
        $(".lang").children().eq(1).text("Ingles");
        $("#career_profile_text").text("Estudiante de séptimo semestre de Ingeniería de Sistemas de la Institución Universitaria de Envigado. Con conocimiento en bases de datos SQL Server, MySQL y Oracle, programación web en PHP, aplicaciones de escritorio en JAVA y C#. Además de ser proactivo, responsable, con iniciativa y puntualidad, asumo todos aquellos retos y metas que la organización me pueda plantear; con buen manejo de relaciones interpersonales, facilidad para trabajar en equipo, así como para resolver problemas eficientemente y con facilidad para el rápido aprendizaje ante los cambios constantes de la tecnología");


        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $("#title").text("Una página web sencilla con la opción de Multi-language");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluciones");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visión General");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Soporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ayuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Términos y Políticas");
    });
});

//English
$(function() {
    $(".en").click(function() {
        //header
        $(".nav-item").children().eq(0).text("CAREER PROFILE");
        $(".nav-item").children().eq(1).text("EXPERIENCE");
        $(".nav-item").children().eq(2).text("Buy");
        $(".nav-item").children().eq(3).text("Log in");
        $(".lang").children().eq(0).text("Spanish");
        $(".lang").children().eq(1).text("English");
        $("#career_profile_text").text("Seventh-semester student of Systems Engineering at the Envigado University Institution. With knowledge in SQL Server, MySQL and Oracle databases, web programming in PHP, desktop applications in JAVA and C#. In addition to being proactive, responsible, with initiative and punctuality, I assume all those challenges and goals that the organization may set for me; with good handling of interpersonal relationships, ability to work in a team, as well as to solve problems efficiently and with the ability to learn quickly in the face of constant changes in technology.");




        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#title").text("A simple webpage with Milti-language option");
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});