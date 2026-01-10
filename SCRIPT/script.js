
// 1. Thao tác HTML & DOM
$(document).ready(function () {
    $("#btnDom").click(function () {
        $("#domthaydoi").text("Nội dung đã được thay đổi bằng xin chào lớp cd24cntt2!");
    });

    // 2. Thay đổi CSS
    $("#btnCss").click(function () {
        $("#cssBox").css({
            "background": "orange",
            "color": "white",
            "padding": "15px",
            "border-radius": "8px"
        });
    });

    // 3. Sự kiện HTML
    $("#btnEvent").click(function () {
        alert("Bạn đã click nút!");
    });

    $("#eventInput").keyup(function () {
        $("#btnEvent").text("Bạn đang gõ: " + $(this).val());
    });

    // 4. Hiệu ứng
    $("#btnEffect").click(function () {
        $("#effectBox").fadeToggle(500);
    });

    // 5. AJAX
    $("#btnAjax").click(function () {
        $("#ajaxResult").text("Đang tải...");
        $.get("https://jsonplaceholder.typicode.com/posts/1", function (data) {
            $("#ajaxResult").html("Tiêu đề: <b>" + data.title + "</b><br>Nội dung: " + data.body);
        });
    });

    // 6. Tiện ích jQuery
    $("#btnUtils").click(function () {
        let text = "   Xin chào cd24cntt2  ";
        let clean = $.trim(text);

        let types = $.type(clean);

        let now = $.now();

        $("#utilsResult").html(
            "Chuỗi sau khi trim: <b>" + clean + "</b><br>" +
            "Kiểu dữ liệu: " + types + "<br>" +
            "Thời gian (ms): " + now
        );
    });
});
