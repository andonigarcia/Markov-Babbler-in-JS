// Andoni Garcia's Markov Babbler in JS. 2014

#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

// Cleans up non-alpha-numeric characters and deletes all-CAPITAL words
char *str_cleanup(char *s)
{
  int len = strlen(s);
  char newstr[++len];

  // Initializing the new string
  int i, j;
  for(i = 0; i < len; i++)
    newstr[i] = '\0';

  // Parsing the input string and only copying alphanumeric or -.!? characters
  int ct = 0;
  for(j = 0; j < len; j++){
    unsigned char c = s[j];
    if(isalpha(c) || isdigit(c) || c == '-' || c == '.' || c == '?' || c == '!'){
      newstr[ct++] = c;
    }
  }

  // If the whole string is CAPIAL LETTERS, returns empty string
  int check = 1;
  int k;
  for(k = 0; k < len; k++){
    unsigned char c = s[k];
    if(isalpha(c)){
      if(c < 65 || c > 90)
	check = 0;
    }
  }
  if(check == 1)
    return "";

  // Ending the new string and returning the appropriate answer.
  newstr[ct] = '\0';
  return strdup(newstr);
}

int main(int argc, char *argv[])
{
  char *file = argv[1];
  FILE *pFile;
  pFile = fopen(file, "r");

  char buffer[250];
  while(fscanf(pFile, "%s", buffer) == 1)
    printf("%s ", str_cleanup(buffer));
  
  fclose(pFile);
  return 0;
}
