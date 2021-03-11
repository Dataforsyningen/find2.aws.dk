import * as util from 'dawa-util';


export function getDawaUrl() {
	let dawa= util.getQueryVariable('api');
	if (!dawa) {
	  dawa= 'https://api.dataforsyningen.dk';
	}
	return dawa;
}

export function getDawaRessource(url) {
	let arr= url.split('/');
  let ressource= arr[3].toLowerCase();
  if (ressource === 'bbr') {
    ressource= ressource + '/' + arr[4].toLowerCase();
  }
  return ressource;
}

export function setSubdomain(url, subdomain) {
	return url.replace(/\/[A-Za-z0-9_\-]*\./,'\/'+subdomain+'.');
}


export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getKortforsyningstoken() {
	return '3d05977c6da79f326cc970b58ea6e9da';
}
