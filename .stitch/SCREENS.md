# CHẠM — Danh sách màn hình chuẩn (canonical)

Nguồn: Stitch project `12434091030029404358`. Chốt ngày 2026-10-20.
Chỉ implement theo đúng các screen ID dưới đây. Mọi màn khác trên canvas là bản cũ / biến thể / wireframe → bỏ qua.

## Màn được dùng

| # | Màn | Stitch screen ID | Cách làm trong code |
|---|-----|------------------|---------------------|
| 02 | Splash Screen - Fixed Version | 107c64c267144b0a817ea159db902ad6 | Route `/` – tự chuyển sang Login |
| 03 | Login Screen | 788c12df891149fe936881962c70c412 | Route `/login` |
| 04 | Phone Number Screen | 3c833cf245be4e85a14f2166a2e5c251 | Route `/phone` |
| 05 | OTP Verification | 45e099a828f74c888710c02ddaff8ce8 | Route `/otp` |
| 06 | Profile Setup | 5f69df29306f409fa0480eb10026f77e | Route `/profile-setup` |
| 07 | Connection Method | 59d55ad550da4c4bb52067a0294c15fa | Route `/connect` |
| 08 | Create Invitation | ceafee340aef4ac88d2facbf31f8048e | Route `/invite` |
| 09 | Enter invitation code | d4dd404b978a424da692c0cb67a291a8 | Route `/join` |
| 10 | Waiting for Partner | 9d3c95efcc8a40fa997af5693f70dbfc | Route `/waiting` |
| 11 | Connection Success | 827e124a24404ad8bb50be8823f8bdb9 | Route `/connected` |
| 12 | Main Home / Chạm (Official) | 343bc344dc4f45458dc686beeefa0f9b | Tab `home` |
| 13 | Sending State | 470fda4b1893450095fcdb09c0d1495f | **Trạng thái/overlay trên Home**, không phải route |
| 15 | Delivered State | f650bf55b4d54c0caa85d22f7b2c3510 | Trạng thái/overlay trên Home |
| 16 | Seen State | 0e3e04c6629849618a420c0b336b3f7e | Trạng thái/overlay trên Home |
| 17 | Send Failure (gộp luôn Offline) | dc05b70e98054f4b902535991a4859e2 | Trạng thái/overlay trên Home |
| 18 + 20 | Create New Tap / Edit Tap | 0aa9c84dde054284bbf749f5a471b959 / 368ca24596e849bbae380c2ea69f758c | **Một màn** `/tap-editor` với `mode=create|edit` |
| 19 | Suggested Tap Library | 3f33e64f95584fdcb85bab5133cd52c9 | Route `/tap-library` |
| 21 | Arrange & Manage Taps | 6bb7781b3acc4592aae5955673a97cc7 | Route `/manage-taps` |
| 22 + 25 | Moments Timeline / Empty Moments | ececab75ff1f4007bc0b3784b23b7fc2 / 508976cf2ea144c98e56bfaf819a03ff | Tab `moments`, Empty là trạng thái khi chưa có dữ liệu |
| 23 | Moment Detail | 39bcb5e8a36341bbb1344ddae8e0021c | Route `/moments/[id]` |
| 24 | Add a Moment | 6a1843f07e9b4ef99e7d76cfa89abb19 | Route `/moments/new` |
| 26 | Hai Đứa - Vivid Bucket List Variant | b962547b714e47bcb1a76973f6703df1 | Tab `together` |
| 27 | Thiết lập Hai Đứa - Enhanced Setup | a26b311d3de047b19d0164fe6ca1481e | Route `/together/setup` |
| 28 | Emotional Status | 34c0c0f752934c1688d669b5f2f73f8e | Route `/together/status` |
| 29 | Settings & Preferences | f0df5c7668e04e46a19678e553a6c1a5 | Route `/profile` (settings) |
| 30 | Notification & Quiet Hours | 6c71a8d5affc4be580624f17b17818ac | Route `/settings/notifications` |
| 31 | Appearance & Themes | f0ee7e44b46f41398e80eaa39ca89094 | Route `/settings/appearance` |
| 32 | Privacy & Security | 1883e6a237cf49339f820f7d787004a1 | Route `/settings/privacy` |
| 33 | Pause Connection | 1e7e2169927a437e98ec2e9cd3e9a514 | Route `/settings/pause` |
| 34 | Unpair Confirmation | 48ba7a08e81949b68feaa7a51bcd3b77 | Route `/settings/unpair` |
| 35 | Block & Safety Report | df1ee3bd9cee4fdf970ee1054b27638c | Route `/settings/safety` |

Tham khảo thêm (không phải màn): `Hệ thống thông báo & Toasts` (2d61199ceee145858427402120afe4ad), `CHẠM Logo` (766c67f36a60443298cd5c5b26453e83).

## Bỏ qua (dư thừa)

- 01. Product Overview — trang giới thiệu sản phẩm, không thuộc app.
- 02. Splash Screen / Splash - Enhanced Version (và 2 bản prototype) — thay bằng bản Fixed.
- 12. Main Home / Chạm (bản cũ) + 6 biến thể HatterAgent (Realistic Love Letter Blocks, Hierarchical Card, Love Letter Style, Compact Grid, With Interaction History, Categorized Interactions) — thay bằng bản Official.
- 14. Successfully Sent — bản cũ, thay bằng 15 Delivered State.
- 15. Hai Đứa - Our Shared Space — thay bằng Vivid Bucket List Variant.
- 16. Thiết lập Hai Đứa - Setup Space — thay bằng Enhanced Setup.
- 4 màn "Skeleton — …" — wireframe.
- 03. Welcome Screen — không có trong bản đồ 35 màn (đang chờ chủ dự án xác nhận).

## Lưu ý thiết kế

- Header của Hai Đứa (26/27) dùng kiểu cũ (logo giữa + bánh răng), khác header Home Official (chữ "Chạm" bên trái + tim + avatar). **Đã chốt (2026-10-20): dùng header của Home Official cho Hai Đứa và mọi tab.**

## File thiết kế

HTML + PNG của từng màn nằm trong `.stitch/designs/<key>.html|png`, danh mục ở `.stitch/designs/index.json` (export 2026-10-20).
