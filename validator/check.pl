use warnings;
use strict;

my $filename = 'main.pl';
if(-e $filename){
   print("File $filename exists.\n");
} else {
   print("File $filename does not exists.\n");
}

# Check if file is readable/accessable/available
# Read README.md for more information