/**
 *
 * The Bipio Github Pod
 * ---------------------------------------------------------------
 *
 * @author Michael Pearson <github@m.bip.io>
 * Copyright (c) 2010-2014 Michael Pearson https://github.com/mjpearson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function AddTeamRepo() {}

AddTeamRepo.prototype = {};

AddTeamRepo.prototype.invoke = function(imports, channel, sysImports, contentParts, next) {
  var self = this,
    pod = this.pod,
    resource = this.$resource,
    dao = resource.dao,
    log = resource.log,
    url;

  url = 'https://api.github.com/teams/'+ imports.id +'/repos/' + imports.org + '/' + imports.repo + '?access_token=' + sysImports.auth.oauth.access_token;
  resource._httpPut(url, null, function(err, repo, headers) {
    next(err, { status : headers.status });
  });

}

// -----------------------------------------------------------------------------
module.exports = AddTeamRepo;