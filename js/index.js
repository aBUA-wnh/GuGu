$(function(){
	// 打开搜索
	function openSearch() {
		$("#Umusic").css("opacity","0");
		$("#search").css("transform","translateX(-48px)");
		$("#search_box").css("background-position",".05rem");
		$("#search_inpt").css("left",".35rem");
		$("#user").css("opacity","0");
		$("#cancel").css("transform","translateX(-.5rem)");
		$("#bottomToolbar").css("transform","translateY(.54rem)");
		$("#playAssembly").css("transform","translateY(.54rem)");
	}
	// 关闭搜索
	function cancelSearch() {
		$("#Umusic").css("opacity","1");
		$("#search").css("transform","translateX(0)");
		$("#search_box").css("background-position",".65rem");
		$("#search_inpt").css("left",".95rem");
		$("#user").css("opacity","1");
		$("#cancel").css("transform","translateX(.48rem)");
		$("#bottomToolbar").css("transform","translateY(0)");
		$("#playAssembly").css("transform","translateY(0)");
	}
	// 点击搜索框
	$("#search_inpt").click(function(){
		openSearch();
	})
	// 点击取消
	$("#cancel").click(function(){
		cancelSearch();
	})
})