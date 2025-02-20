console.log(4444);

const signButtons = document.querySelectorAll("#sign-button");
const dialog1 = document.getElementById('dialog');

signButtons.forEach(button => {
    button.addEventListener('click', () => {
        dialog1.innerHTML = `
        <form action="thankyou.html" method="get" class="required">
            <fieldset>
                <label for="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" title="First Name" autocomplete="given-name" required>
            </fieldset>
            
            <fieldset>
                <label for="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" title="Last Name" autocomplete="family-name" required>
            </fieldset>
            
            <fieldset>
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" title="Email" autocomplete="email" placeholder="example@example.com" required>
            </fieldset>
            
            <fieldset>
                <label for="phone">Mobile Phone *</label>
                <input type="tel" id="phone" name="phone" title="Mobile Phone" autocomplete="tel" required>
            </fieldset>
                     
            <input type="hidden" id="timestamp" name="timestamp" value="">
            
            <input type="submit" value="Submit" id="button">
            <button type="button" id="close-dialog">Close</button>
        </form>
        `;

        // Add event listener to close button
        const closeDialog = document.getElementById('close-dialog');
        closeDialog.addEventListener('click', () => {
            dialog1.close();
        });

        dialog1.showModal();
    });
});