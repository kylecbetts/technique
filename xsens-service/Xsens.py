import xme

class Xsens:
    def __init__(self):
        self.license = xme.XmeLicense()
        self.control = xme.XmeControl()

    def is_license_available(self):
        return self.license.isLicenseAvailable()

    def close_file(self):
        self.control.closeFile()

    def open_file(self, file_path):
        self.control.openMvnFile(file_path)
