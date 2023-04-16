import unittest
from Xsens import Xsens

class XsensTest(unittest.TestCase):
    def setUp(self):
        self.xsens = Xsens()

    def test_initialize(self):
        self.assertIsNotNone(self.xsens.license)
        self.assertIsNotNone(self.xsens.control)

    def test_is_license_available(self):
        available = self.xsens.is_license_available()
        self.assertTrue(available)
