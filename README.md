### web2_finalproject
===
##Người thực hiện: 
<br> 1560008 </t> Nguyễn Sanh Đình Anh
----------------

<br><br>
##Yêu cầu: 
<br>#SITE ĐẤU GIÁ TRỰC TUYẾN<br>
Overall(16+10+4+5=34/78)


x = done ; o = ommit ; r = replaced with other feature ; p = partly done<br>
==Người dùng nặc danh (ko đăng nhập) (14+3+1+2=21/24)==<br>
[x]	Trang chủ<br>
[x]	Top 5 sản phẩm có nhiều lượt ra giá nhất<br>
[x]	Top 5 sản phẩm có giá cao nhất<br>
[x]	Top 5 sản phẩm gần kết thúc<br>
[x]	Tìm kiếm sản phẩm<br>
[o]	Tìm theo tên and/or Tìm theo danh mục<br>
[x]	Phân trang kết quả<br>
[x]	Có số trang cụ thể<br>
[o]	Hoặc KHÔNG (load more button + ajax)<br>
[]	Sắp xếp theo ý người dùng<br>
[]	Thời gian kết thúc giảm dần<br>
[]	Giá tăng dần<br>
[o]	Những sản phẩm mới đăng trong vòng N phút sẽ có thể hiện khác các sản phẩm còn lại<br>
[p]	Thể hiện đủ các thông tin: 1 hình ảnh, tên sản phẩm, giá hiện tại, người dùng đang giữ giá (mã hoá),  giá mua ngay (nếu có), thời gian còn lại, số lượt ra giá hiện tại<br>
[r]	Xem chi tiết sản phẩm đấu giá<br>
[x]	Thể hiện đầy đủ 3 hình ảnh<br>
[x]	Có mô tả html<br>
[p]	Thể hiện đầy đủ các thông tin của sản phẩm: tên, giá hiện tại, giá mua ngay (nếu có), người bán & điểm đánh giá (url), người đang giữ giá cao nhất & điểm đánh giá (url), thời điểm đăng, thời điểm kết thúc<br>
[x]	Đăng ký<br>
[o]	reCaptcha<br>
[x]	Mật khẩu được mã hoá md5 (yếu)<br>
[x]	Thông tin: họ tên, địa chỉ, email (quan trọng, không trùng, có thật)<br>
[x]	Đăng nhập<br>
[x]	Đăng xuất <br>

==Người mua (người dùng đã đăng nhập) (0/17)==<br>
[]	Lưu 1 sản phẩm vào danh sách yêu thích (Watch List)<br>
[]	View tìm sản phẩm<br>
[]	View xem chi tiết sản phẩm<br>
[]	Ra giá 1 sản phẩm<br>
[]	View xem chi tiết sản phẩm<br>
[]	Hệ thống kiểm tra điểm đánh giá (+/+-) hơn 80% thì mới cho phép ra giá<br>
[]	Hệ thống đề nghị giá hợp lệ (thường là giá hiện tại + bước giá do người bán thiết lập)<br>
[]	Hệ thống yêu cầu xác nhận<br>
[]	Xem lịch sử đấu giá của sản phẩm (bid_log.txt)<br>
[]	Quản lý hồ sơ cá nhân<br>
[]	Đổi thông tin email, họ tên, mật khẩu (có yêu cầu nhập mật khẩu cũ)<br>
[]	Xem điểm đánh giá và chi tiết các lần “được” đánh giá & đoạn nhận xét mà người đánh giá gửi<br>
[]	Xem danh sách sản phẩm yêu thích của mình<br>
[]	Xem danh sách sản phẩm mà mình đang tham gia đấu giá<br>
[]	Xem danh sách sản phẩm mà mình đã thắng (giá cao nhất)<br>
[]	Được phép đánh giá người bán +1 hoặc -1, gửi kèm 1 đoạn nhận xét<br>
[]	Xin được bán trong vòng 7 ngày<br>

==Người bán (người dùng có quyền đăng bán & đã đăng nhập) (2+5+5+1=13/13)==<br>
[x]	Đăng 1 sản phẩm lên đấu giá<br>
[x]	Nhập đủ thông tin: tên sản phẩm, tối đa 3 ảnh, giá khởi điểm, bước giá, giá mua ngay (nếu cần), thời gian đăng, mô tả (html)<br>
[r]	Có tự động gia hạn ko? Nếu có, khi có lượt đấu giá mới trước khi kết thúc 5 phút, sản phẩm tự động gia hạn thêm 10p.<br>
[r]	Xem chi tiết sản phẩm<br>
[o]	Cập nhật thông tin sản phẩm đã đăng<br>
[o]	Chỉ cho phép THÊM thông tin mô tả (thể hiện xem ở desc.txt)<br>
[r]	Xem lịch sử ra giá => KICK người mua ra khỏi sản phẩm<br>
[r]	Người mua bị kick không tham gia đấu giá sản phẩm này được nữa<br>
[r]	Nếu người mua bị kick đang giữ giá, sản phẩm chuyển cho người mua có giá lớn nhất<br>
[o]	Quản lý hồ sơ cá nhân (tt)<br>
[p]	Xem danh sách sản phẩm mình đang đăng & còn hạn<br>
[o]	Xem danh sách sản phẩm đã có người mua<br>
[o]	Được phép đánh giá +1 hoặc -1 người chiến thắng, có gửi kèm 1 đoạn nhận xét<br>

==Quản trị (0/9)==<br>
[]	Duyệt yêu cầu xin được bán của người dùng<br>
[]	Xem danh sách người mua xin được bán, sắp xếp theo thời gian xin tăng dần<br>
[]	Quản trị danh sách người dùng<br>
[]	Xoá người dùng<br>
[]	Reset mật khẩu người dùng<br>
[]	Quản trị danh sách danh mục<br>
[]	Thêm<br>
[]	Xoá<br>
[]	Sửa<br>

==Hệ thống (0+1+0+0=1/15)==<br>
[o]	Với mỗi giao dịch “quan trọng”, hệ thống gửi 1 email cho các bên liên quan nhằm thông báo<br>
[]	Ra giá thành công, giá sản phẩm được cập nhật<br>
[]	Gửi người bán<br>
[]	Gửi người ra giá<br>
[]	Gửi người giữ giá trước đó (nếu có)<br>
[]	Người mua bị kick<br>
[]	Người mua<br>
[]	Đấu giá kết thúc, không có người mua<br>
[]	Người bán<br>
[]	Đấu giá kết thúc<br>
[]	Người bán<br>
[]	Người thắng<br>
[]	Hỗ trợ đấu giá TỰ ĐỘNG, giúp người mua có thể thắng được sản phẩm đấu giá với giá THẤP NHẤT có thể<br>
[]	Người mua ra giá MAX mà mình có thể trả cho sản phẩm<br>
[]	Giá hiện tại của sản phẩm sẽ liên tục được cập nhật dựa trên giá MAX và giá MAX của người mua khác<br>
