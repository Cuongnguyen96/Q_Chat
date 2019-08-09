export const transValidation  = {
    email_incorect: "Email Not Recongintion",
    gender_incorect: "Male Or Female",
    password_incorect: "Regulation Character or Number",
    password_confirmation_incorect: "Incorrect"
};

export const transErrors = {
    account_in_use: " Email này đã được sử dụng.",
    account_removed: " Tài khoản này đã bị gỡ bỏ khỏi hệ thống.",
    account_not_active: " Tài khoản này đã được đăng ký nhưng chưa Active, vui lòng kiểm tra Email của bạn.",
    token_undefine: "Token không tồn tại."
};

export const transSuccess = {
    userCreated: (userEmail) => {
        return `Tài khoản  <strong> ${userEmail} </strong> đã được tạo, vui lòng kiểm tra lại Email của bạn để Avtive tài khoản.`
    },
    account_actived: "Kichs hoạt tài khỏan thành công."
}

export const transMail = {
    subject: "QChat: Xác nhận kích hoạt tài khoản.",
    template: (linkVerify) => {
        return `
        <h2> Bạn đã nhận được email này vì đăng ký tài khoản trên ứng dụng QChat </h2>
        <h3> Vui lòng click vào link bên dưới để kích hoạt </h3>
        <h3> <a href="${linkVerify}" target="bank"> ${linkVerify} </a></h3>
        <h4> Cảm ơn bạn đã đến ứng dụng QChat </h4>
        `
    },
    send_failed: "Error send email"
}