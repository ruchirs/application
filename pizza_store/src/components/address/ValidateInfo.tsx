const ValidateInfo = (values: any) => {
    console.log('values', values)
    let errors: any = {}

    errors.show = true;
    errors.variant = "danger";
    errors.message = "An unknown error occured. Please try again later"
    errors.ename = false;
    errors.enumber = false;
    errors.ehouseNumber = false;
    errors.estreetName = false;
    errors.epostalCode = false;
    errors.ecity = false;

    let errorsThrown = false

    //User Name
    if (values.userName === null || !values.userName.trim() && !errorsThrown) {
        errors.message = "User Name is mandatory";
        errorsThrown = true
    } else if (values.userName) {
        errors.ename = true;
    }

    //Phone Number
    if (values.phoneNumber === null || !values.phoneNumber.trim() && !errorsThrown) {
        errors.message = "Phone Number is mandatory";
        errorsThrown = true
    } else if (values.phoneNumber) {
        errors.enumber = true;
    }

    //House Number Verification
    if (values.houseNumber === null || !values.houseNumber.trim() && !errorsThrown) {
        errors.message = "House Number is mandatory";
        errorsThrown = true
    } else if (values.houseNumber) {
        errors.ehouseNumber = true;
    }

    //Street Name Check
    if (values.streetName === null || !values.streetName.trim() && !errorsThrown) {
        errors.message = "Street Name is mandatory";
        errorsThrown = true
    } else if (values.streetName) {
        errors.estreetName = true;
    }

    //Postal Code check
    if (values.postalCode === null || !values.postalCode.trim() && !errorsThrown) {
        errors.message = "Postal Code is mandatory";
        errorsThrown = true
    } else if (values.postalCode) {
        errors.epostalCode = true;
    }

    //City check
    if (values.city === null || !values.city.trim() && !errorsThrown) {
        errors.message = "City is mandatory";
        errorsThrown = true
    } else if (values.city) {
        errors.ecity = true;
    }

    if (
        errors.ename &&
        errors.enumber &&
        errors.ehouseNumber &&
        errors.estreetName &&
        errors.ecity &&
        errors.epostalCode
    ) {
        errors.variant = "success";
        errors.message = "Address is valid";
    }


    return errors
}

export default ValidateInfo