
The Comment Registration module enables the inline registration of new accounts
while commenting.

## Features

- Comment registration for anonymous users
- Hide undeletable core comment fields
- [Profile2](http://drupal.org/project/profile2) support
- [Email Registration](http://drupal.org/project/email_registration) support

## Requirements

1. Visitors must be able to create accounts (admin/config/people/accounts).

2. Anonymous commenting must be set to at least allow anonymous posters to 
leave their content information. The comment registration option will not 
appear if "Anonymous comments" is set to "Anonymous posters may not enter 
their contact information".

## Installation

1. Install the the module like any other drupal module.
See http://drupal.org/getting-started/install-contrib/modules for more information.

2. Navigate to admin/config/people/accounts/settings and select either "Visitors"
or "Visitors, but administrator approval is required" for the "Who can register
accounts?" setting in the "Registration and Cancellation" fieldset.

3. Enable comment registration for one or more content types at admin/structure/types:
     a. navigate to the edit form for a content type (ie admin/structure/types/article).
     b. open the "Comment settings" fieldset.
     c. set the commenting options as desired.
  

## Troubleshooting

The module will do *NOTHING* if "Administrators only" is the selected option in
the "Registration and Cancellation" fieldset at admin/config/people/accounts.
Users must be able to register in order for them to be able to register inline.

Before creating an issue in the module's issue queue, please verify that you've
enabled user registrations at admin/config/people/accounts.