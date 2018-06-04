### web2_finalproject
##Người thực hiện: 
<br> 1560008 </t> Nguyễn Sanh Đình Anh

<br><br>
##Yêu cầu:
#SITE ĐẤU GIÁ TRỰC TUYẾN

Người dùng nặc danh (ko đăng nhập) (0/24)
[]	Trang chủ
[]	Top 5 sản phẩm có nhiều lượt ra giá nhất
[]	Top 5 sản phẩm có giá cao nhất
[]	Top 5 sản phẩm gần kết thúc
[]	Tìm kiếm sản phẩm
[]	Tìm theo tên and/or Tìm theo danh mục
[]	Phân trang kết quả
[]	Có số trang cụ thể
[]	Hoặc KHÔNG (load more button + ajax)
[]	Sắp xếp theo ý người dùng
[]	Thời gian kết thúc giảm dần
[]	Giá tăng dần
[]	Những sản phẩm mới đăng trong vòng N phút sẽ có thể hiện khác các sản phẩm còn lại
[]	Thể hiện đủ các thông tin: 1 hình ảnh, tên sản phẩm, giá hiện tại, người dùng đang giữ giá (mã hoá),  giá mua ngay (nếu có), thời gian còn lại, số lượt ra giá hiện tại
[]	Xem chi tiết sản phẩm đấu giá
[]	Thể hiện đầy đủ 3 hình ảnh
[]	Có mô tả html
[]	Thể hiện đầy đủ các thông tin của sản phẩm: tên, giá hiện tại, giá mua ngay (nếu có), người bán & điểm đánh giá (url), người đang giữ giá cao nhất & điểm đánh giá (url), thời điểm đăng, thời điểm kết thúc
[]	Đăng ký
[]	reCaptcha
[]	Mật khẩu được mã hoá md5 (yếu)
[]	Thông tin: họ tên, địa chỉ, email (quan trọng, không trùng, có thật)
[]	Đăng nhập
[]	Đăng xuất 

Người mua (người dùng đã đăng nhập) (0/17)
[]	Lưu 1 sản phẩm vào danh sách yêu thích (Watch List)
[]	View tìm sản phẩm
[]	View xem chi tiết sản phẩm
[]	Ra giá 1 sản phẩm
[]	View xem chi tiết sản phẩm
[]	Hệ thống kiểm tra điểm đánh giá (+/+-) hơn 80% thì mới cho phép ra giá
[]	Hệ thống đề nghị giá hợp lệ (thường là giá hiện tại + bước giá do người bán thiết lập)
[]	Hệ thống yêu cầu xác nhận
[]	Xem lịch sử đấu giá của sản phẩm (bid_log.txt)
[]	Quản lý hồ sơ cá nhân
[]	Đổi thông tin email, họ tên, mật khẩu (có yêu cầu nhập mật khẩu cũ)
[]	Xem điểm đánh giá và chi tiết các lần “được” đánh giá & đoạn nhận xét mà người đánh giá gửi
[]	Xem danh sách sản phẩm yêu thích của mình
[]	Xem danh sách sản phẩm mà mình đang tham gia đấu giá
[]	Xem danh sách sản phẩm mà mình đã thắng (giá cao nhất)
[]	Được phép đánh giá người bán +1 hoặc -1, gửi kèm 1 đoạn nhận xét
[]	Xin được bán trong vòng 7 ngày

Người bán (người dùng có quyền đăng bán & đã đăng nhập) (0/13)
[]	Đăng 1 sản phẩm lên đấu giá
[]	Nhập đủ thông tin: tên sản phẩm, tối đa 3 ảnh, giá khởi điểm, bước giá, giá mua ngay (nếu cần), thời gian đăng, mô tả (html)
[]	Có tự động gia hạn ko? Nếu có, khi có lượt đấu giá mới trước khi kết thúc 5 phút, sản phẩm tự động gia hạn thêm 10p.
[]	Xem chi tiết sản phẩm
[]	Cập nhật thông tin sản phẩm đã đăng
[]	Chỉ cho phép THÊM thông tin mô tả (thể hiện xem ở desc.txt)
[]	Xem lịch sử ra giá => KICK người mua ra khỏi sản phẩm
[]	Người mua bị kick không tham gia đấu giá sản phẩm này được nữa
[]	Nếu người mua bị kick đang giữ giá, sản phẩm chuyển cho người mua có giá lớn nhất
[]	Quản lý hồ sơ cá nhân (tt)
[]	Xem danh sách sản phẩm mình đang đăng & còn hạn
[]	Xem danh sách sản phẩm đã có người mua
[]	Được phép đánh giá +1 hoặc -1 người chiến thắng, có gửi kèm 1 đoạn nhận xét

Quản trị (0/9)
[]	Duyệt yêu cầu xin được bán của người dùng
[]	Xem danh sách người mua xin được bán, sắp xếp theo thời gian xin tăng dần
[]	Quản trị danh sách người dùng
[]	Xoá người dùng
[]	Reset mật khẩu người dùng
[]	Quản trị danh sách danh mục
[]	Thêm
[]	Xoá
[]	Sửa

Hệ thống (0/15)
[]	Với mỗi giao dịch “quan trọng”, hệ thống gửi 1 email cho các bên liên quan nhằm thông báo
[]	Ra giá thành công, giá sản phẩm được cập nhật
[]	Gửi người bán
[]	Gửi người ra giá
[]	Gửi người giữ giá trước đó (nếu có)
[]	Người mua bị kick
[]	Người mua
[]	Đấu giá kết thúc, không có người mua
[]	Người bán
[]	Đấu giá kết thúc
[]	Người bán
[]	Người thắng
[]	Hỗ trợ đấu giá TỰ ĐỘNG, giúp người mua có thể thắng được sản phẩm đấu giá với giá THẤP NHẤT có thể
[]	Người mua ra giá MAX mà mình có thể trả cho sản phẩm
[]	Giá hiện tại của sản phẩm sẽ liên tục được cập nhật dựa trên giá MAX và giá MAX của người mua khác
